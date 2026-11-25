import { TestBed } from '@angular/core/testing';
import { ContactError, ContactService, buildPayload } from './contact.service';
import { ProjectRequest } from './project-form.model';

const REQUEST: ProjectRequest = {
  services: ['agents', 'integration'],
  budget: '25k-75k',
  timeline: null,
  message: 'We want an assistant that answers order questions.',
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  company: ''
};

const ENDPOINT = 'https://formsubmit.co/ajax/inbox@example.com';

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

describe('buildPayload', () => {
  it('turns stable values back into readable English labels', () => {
    const payload = buildPayload(REQUEST, 'de');

    expect(payload['Looking for']).toBe('AI agents and assistants, Connecting our systems');
    expect(payload['Budget']).toBe('€25k–75k');
    expect(payload['Timeline']).toBe('Not specified');
    expect(payload['Company']).toBe('Not specified');
    expect(payload['Site language']).toBe('de');
  });

  it('sets the subject and lets the inbox reply straight to the visitor', () => {
    const payload = buildPayload({ ...REQUEST, company: 'Analytical Engines' }, 'en');

    expect(payload['_subject']).toBe('New project request from Ada Lovelace (Analytical Engines)');
    expect(payload['_replyto']).toBe('ada@example.com');
    expect(payload['_template']).toBe('table');
  });
});

describe('ContactService', () => {
  let service: ContactService;
  let fetchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
    window.__GEMINI_CONTACT__ = { endpoint: ENDPOINT };
    fetchSpy = spyOn(window, 'fetch');
  });

  afterEach(() => delete window.__GEMINI_CONTACT__);

  it('posts the payload as JSON to the configured endpoint', async () => {
    fetchSpy.and.resolveTo(jsonResponse({ success: 'true' }));

    await service.send(REQUEST, 'en');

    const [url, init] = fetchSpy.calls.mostRecent().args as [string, RequestInit];
    expect(url).toBe(ENDPOINT);
    expect(init.method).toBe('POST');
    expect((init.headers as Record<string, string>)['Content-Type']).toBe('application/json');
    expect(JSON.parse(init.body as string)).toEqual(buildPayload(REQUEST, 'en'));
  });

  it('rejects when the relay answers with success "false"', async () => {
    fetchSpy.and.resolveTo(jsonResponse({ success: 'false', message: 'This form needs Activation.' }));

    await expectAsync(service.send(REQUEST, 'en')).toBeRejectedWith(
      jasmine.objectContaining({ reason: 'rejected', message: 'This form needs Activation.' })
    );
  });

  it('rejects on an error status', async () => {
    fetchSpy.and.resolveTo(jsonResponse({}, 500));
    await expectAsync(service.send(REQUEST, 'en')).toBeRejectedWithError(ContactError);
  });

  it('rejects when the network fails', async () => {
    fetchSpy.and.rejectWith(new TypeError('Failed to fetch'));
    await expectAsync(service.send(REQUEST, 'en')).toBeRejectedWith(jasmine.objectContaining({ reason: 'network' }));
  });

  it('refuses to send without an endpoint', async () => {
    window.__GEMINI_CONTACT__ = { endpoint: '  ' };
    await expectAsync(service.send(REQUEST, 'en')).toBeRejectedWith(
      jasmine.objectContaining({ reason: 'not_configured' })
    );
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
