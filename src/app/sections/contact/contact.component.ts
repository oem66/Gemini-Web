import { Component, ElementRef, computed, inject, signal } from '@angular/core';
import { AnalyticsService } from '../../core/analytics.service';
import { ChoiceOption, MessageStarter, format } from '../../core/i18n';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { ContactError, ContactService } from './contact.service';
import { FormField, ProjectFormModel, STEP_COUNT } from './project-form.model';

type Status = 'editing' | 'sending' | 'sent' | 'failed';

interface SentSummary {
  name: string;
  email: string;
  services: string[];
  budget: string | null;
  timeline: string | null;
}

/** Where focus goes when a field needs attention. */
const FIELD_TARGET: Record<FormField, string> = {
  services: '.chips input',
  message: '#pf-message',
  name: '#pf-name',
  email: '#pf-email'
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly contact = inject(ContactService);
  private readonly analytics = inject(AnalyticsService);
  private readonly language = inject(LanguageService);

  readonly t = this.language.t;
  readonly form = computed(() => this.t().contact.form);
  readonly model = new ProjectFormModel();
  readonly stepCount = STEP_COUNT;

  readonly status = signal<Status>('editing');
  /** +1 moving forward, −1 going back: the next step slides in from that side. */
  readonly direction = signal<1 | -1>(1);
  readonly sent = signal<SentSummary | null>(null);

  readonly errors = this.model.visibleErrors;

  readonly progressText = computed(() =>
    format(this.form().progress, { current: this.model.step() + 1, total: STEP_COUNT })
  );

  readonly countText = computed(() => format(this.form().messageCount, { count: this.model.messageLength() }));

  readonly sentCopy = computed(() => {
    const sent = this.sent();
    return sent ? format(this.form().sentCopy, { name: sent.name, email: sent.email }) : '';
  });

  readonly sentLines = computed(() => {
    const sent = this.sent();
    if (!sent) {
      return [];
    }
    const form = this.form();
    const lines = [sent.services.map((value) => labelFor(form.services, value)).join(', ')];
    if (sent.budget) {
      lines.push(`${form.budgetTitle}: ${labelFor(form.budgets, sent.budget)}`);
    }
    if (sent.timeline) {
      lines.push(`${form.timelineTitle}: ${labelFor(form.timelines, sent.timeline)}`);
    }
    return lines;
  });

  /** Enter in a single-line field moves on; on the last step it sends. */
  onSubmit(): void {
    if (this.status() === 'sending') {
      return;
    }

    if (this.model.step() < STEP_COUNT - 1) {
      this.next();
      return;
    }

    void this.send();
  }

  next(): void {
    const step = this.model.step();
    if (this.model.next()) {
      this.direction.set(1);
      this.analytics.capture('contact_form_step_completed', { step: step + 1 });
      this.focusStep();
      return;
    }

    this.reportInvalid();
  }

  back(): void {
    this.direction.set(-1);
    this.model.back();
    this.status.set('editing');
    this.focusStep();
  }

  /** Lets the visitor go straight back to a finished step from the progress bar. */
  goTo(step: number): void {
    if (step < this.model.step()) {
      this.direction.set(-1);
      this.model.step.set(step as 0 | 1 | 2);
      this.focusStep();
    }
  }

  useStarter(starter: MessageStarter): void {
    const current = this.model.message().trim();
    const isStarter = this.form().starters.some((item) => item.text.trim() === current);
    this.model.message.set(current.length === 0 || isStarter ? starter.text : `${current}\n\n${starter.text}`);

    const textarea = this.host.querySelector<HTMLTextAreaElement>('#pf-message');
    if (textarea) {
      textarea.value = this.model.message();
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  }

  /** Cmd/Ctrl + Enter in the message moves on, as it does in most composers. */
  onMessageKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      this.next();
    }
  }

  startOver(): void {
    this.sent.set(null);
    this.status.set('editing');
    this.direction.set(1);
    this.focusStep();
  }

  private async send(): Promise<void> {
    if (!this.model.validateAll()) {
      const step = this.model.firstInvalidStep();
      if (step !== null && step !== this.model.step()) {
        this.direction.set(-1);
        this.model.step.set(step);
      }
      this.reportInvalid();
      return;
    }

    const request = this.model.toRequest();
    this.status.set('sending');

    try {
      // Bots fill the hidden field. They get a success screen and nothing is sent.
      if (!this.model.isLikelyBot()) {
        await this.contact.send(request, this.language.lang());
      }

      this.analytics.capture('contact_form_submitted', {
        services: request.services,
        budget: request.budget ?? 'not_specified',
        timeline: request.timeline ?? 'not_specified',
        language: this.language.lang()
      });

      this.sent.set({
        name: request.name,
        email: request.email,
        services: request.services,
        budget: request.budget,
        timeline: request.timeline
      });
      this.model.reset();
      this.status.set('sent');
      this.focus('.sent-title');
    } catch (error) {
      this.status.set('failed');
      this.analytics.capture('contact_form_failed', {
        reason: error instanceof ContactError ? error.reason : 'unknown'
      });
    }
  }

  private reportInvalid(): void {
    const field = this.model.firstInvalidField();
    this.analytics.capture('contact_form_validation_failed', { step: this.model.step() + 1, field });
    if (field) {
      this.focus(FIELD_TARGET[field]);
    }
  }

  private focusStep(): void {
    this.focus('.step-title');
  }

  /* Focus moves after Angular has rendered the new step. The panel is brought
     back into view first, so a shorter step never leaves the visitor below it. */
  private focus(selector: string): void {
    setTimeout(() => {
      const panel = this.host.querySelector<HTMLElement>('.panel');
      const top = panel?.getBoundingClientRect().top ?? 0;
      if (panel && top < 72) {
        window.scrollBy({ top: top - 96, behavior: 'smooth' });
      }
      this.host.querySelector<HTMLElement>(selector)?.focus({ preventScroll: true });
    });
  }
}

function labelFor(options: ChoiceOption[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? value;
}
