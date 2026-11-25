import { MESSAGE_MIN_LENGTH, ProjectFormModel } from './project-form.model';

const VALID_MESSAGE = 'We copy every order into invoices by hand and want that automated.';

function fillValid(model: ProjectFormModel): void {
  model.toggleService('automation');
  model.message.set(VALID_MESSAGE);
  model.name.set('Ada Lovelace');
  model.email.set('ada@example.com');
}

describe('ProjectFormModel', () => {
  let model: ProjectFormModel;

  beforeEach(() => (model = new ProjectFormModel()));

  it('starts on the first step with no visible errors', () => {
    expect(model.step()).toBe(0);
    expect(Object.values(model.visibleErrors())).toEqual([false, false, false, false]);
  });

  describe('step 1 — services', () => {
    it('will not advance without a service, and then shows why', () => {
      expect(model.next()).toBeFalse();
      expect(model.step()).toBe(0);
      expect(model.visibleErrors().services).toBeTrue();
      expect(model.firstInvalidField()).toBe('services');
    });

    it('advances once a service is chosen', () => {
      model.toggleService('agents');
      expect(model.next()).toBeTrue();
      expect(model.step()).toBe(1);
    });

    it('toggles services on and off', () => {
      model.toggleService('agents');
      model.toggleService('data');
      model.toggleService('agents');
      expect(model.services()).toEqual(['data']);
    });

    it('treats budget and timeline as optional, and clears them on a second pick', () => {
      model.choose('budget', '10k-25k');
      expect(model.budget()).toBe('10k-25k');
      model.choose('budget', '10k-25k');
      expect(model.budget()).toBeNull();
    });
  });

  describe('step 2 — message', () => {
    beforeEach(() => {
      model.toggleService('agents');
      model.next();
    });

    it(`needs at least ${MESSAGE_MIN_LENGTH} meaningful characters`, () => {
      model.message.set('   too short   ');
      expect(model.next()).toBeFalse();
      expect(model.visibleErrors().message).toBeTrue();

      model.message.set(VALID_MESSAGE);
      expect(model.next()).toBeTrue();
      expect(model.step()).toBe(2);
    });

    it('does not nag while a field is untouched and empty', () => {
      model.touch('message');
      expect(model.visibleErrors().message).toBeFalse();
    });

    it('reports a short message once the visitor has left the field', () => {
      model.message.set('Hi');
      model.touch('message');
      expect(model.visibleErrors().message).toBeTrue();
    });
  });

  describe('step 3 — contact', () => {
    beforeEach(() => {
      model.toggleService('agents');
      model.next();
      model.message.set(VALID_MESSAGE);
      model.next();
    });

    it('validates name and email', () => {
      model.email.set('not-an-email');
      model.touch('email');
      expect(model.visibleErrors().email).toBeTrue();
      expect(model.visibleErrors().name).toBeFalse();

      expect(model.validateAll()).toBeFalse();
      expect(model.visibleErrors().name).toBeTrue();
      expect(model.firstInvalidField()).toBe('name');
    });

    it('accepts a complete form', () => {
      model.name.set('Ada Lovelace');
      model.email.set('ada@example.com');
      expect(model.validateAll()).toBeTrue();
    });

    it('never moves past the last step', () => {
      model.name.set('Ada Lovelace');
      model.email.set('ada@example.com');
      expect(model.next()).toBeFalse();
      expect(model.step()).toBe(2);
    });
  });

  it('points a failed submit at the earliest step with a problem', () => {
    model.toggleService('agents');
    model.next();
    model.next();
    model.step.set(2);
    expect(model.validateAll()).toBeFalse();
    expect(model.firstInvalidStep()).toBe(1);
  });

  it('goes back without losing anything', () => {
    model.toggleService('agents');
    model.next();
    model.message.set(VALID_MESSAGE);
    model.back();
    expect(model.step()).toBe(0);
    expect(model.services()).toEqual(['agents']);
    expect(model.message()).toBe(VALID_MESSAGE);
  });

  it('builds a trimmed request with stable values', () => {
    fillValid(model);
    model.email.set('  ada@example.com ');
    model.company.set(' Analytical Engines ');
    model.choose('timeline', 'asap');

    expect(model.toRequest()).toEqual({
      services: ['automation'],
      budget: null,
      timeline: 'asap',
      message: VALID_MESSAGE,
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      company: 'Analytical Engines'
    });
  });

  it('flags a filled honeypot as a bot', () => {
    expect(model.isLikelyBot()).toBeFalse();
    model.honeypot.set('https://spam.example');
    expect(model.isLikelyBot()).toBeTrue();
  });

  it('resets to a clean first step', () => {
    fillValid(model);
    model.validateAll();
    model.step.set(2);
    model.reset();

    expect(model.step()).toBe(0);
    expect(model.services()).toEqual([]);
    expect(model.message()).toBe('');
    expect(Object.values(model.visibleErrors())).toEqual([false, false, false, false]);
  });
});
