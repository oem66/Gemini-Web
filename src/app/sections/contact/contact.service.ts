import { Injectable } from '@angular/core';
import { en } from '../../core/i18n/en';
import { ChoiceOption } from '../../core/i18n';
import { ProjectRequest } from './project-form.model';

const REQUEST_TIMEOUT_MS = 20_000;

export class ContactError extends Error {
  constructor(
    message: string,
    readonly reason: 'not_configured' | 'network' | 'timeout' | 'rejected'
  ) {
    super(message);
    this.name = 'ContactError';
  }
}

/**
 * Builds the email body. Choice values are turned back into English labels so
 * the inbox always reads the same, whatever language the visitor used.
 */
export function buildPayload(request: ProjectRequest, language: string): Record<string, string> {
  const form = en.contact.form;
  const label = (options: ChoiceOption[], value: string | null) =>
    value === null ? 'Not specified' : options.find((option) => option.value === value)?.label ?? value;

  const subjectCompany = request.company ? ` (${request.company})` : '';

  return {
    Name: request.name,
    Email: request.email,
    Company: request.company || 'Not specified',
    'Looking for': request.services.map((value) => label(form.services, value)).join(', '),
    Budget: label(form.budgets, request.budget),
    Timeline: label(form.timelines, request.timeline),
    Message: request.message,
    'Site language': language,
    _subject: `New project request from ${request.name}${subjectCompany}`,
    _replyto: request.email,
    _template: 'table',
    _captcha: 'false'
  };
}

/** Sends project requests to the inbox configured in assets/contact-config.js. */
@Injectable({ providedIn: 'root' })
export class ContactService {
  endpoint(): string | null {
    const endpoint = typeof window === 'undefined' ? '' : window.__GEMINI_CONTACT__?.endpoint?.trim();
    return endpoint ? endpoint : null;
  }

  async send(request: ProjectRequest, language: string): Promise<void> {
    const endpoint = this.endpoint();
    if (!endpoint) {
      throw new ContactError('No contact endpoint is configured.', 'not_configured');
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    let response: Response;
    try {
      response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildPayload(request, language)),
        signal: controller.signal
      });
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === 'AbortError';
      throw new ContactError(
        timedOut ? 'The request timed out.' : 'The request could not be sent.',
        timedOut ? 'timeout' : 'network'
      );
    } finally {
      clearTimeout(timer);
    }

    // FormSubmit answers 200 with `success: "false"` for problems such as an
    // inactive form, so the body decides, not just the status.
    let body: { success?: string | boolean; message?: string } = {};
    try {
      body = await response.json();
    } catch {
      // A non-JSON body is only acceptable alongside a successful status.
    }

    const succeeded = response.ok && body.success !== false && body.success !== 'false';
    if (!succeeded) {
      throw new ContactError(body.message || `The server answered ${response.status}.`, 'rejected');
    }
  }
}
