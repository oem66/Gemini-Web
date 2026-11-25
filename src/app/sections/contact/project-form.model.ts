import { computed, signal } from '@angular/core';

export const MESSAGE_MIN_LENGTH = 20;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const STEP_COUNT = 3;

export type FormStep = 0 | 1 | 2;
export type FormField = 'services' | 'message' | 'name' | 'email';

/** What leaves the browser. Choice fields hold stable values, never translated labels. */
export interface ProjectRequest {
  services: string[];
  budget: string | null;
  timeline: string | null;
  message: string;
  name: string;
  email: string;
  company: string;
}

const FIELDS_BY_STEP: Record<FormStep, FormField[]> = {
  0: ['services'],
  1: ['message'],
  2: ['name', 'email']
};

/**
 * State and rules for the three-step project form, free of any UI so it can be
 * tested on its own.
 *
 * Errors are never shown before the visitor has had a chance to get it right:
 * a field reports once it has been left with something in it, and every field
 * on a step reports once the visitor tries to move past that step.
 */
export class ProjectFormModel {
  readonly step = signal<FormStep>(0);

  readonly services = signal<string[]>([]);
  readonly budget = signal<string | null>(null);
  readonly timeline = signal<string | null>(null);
  readonly message = signal('');
  readonly name = signal('');
  readonly email = signal('');
  readonly company = signal('');
  /** Hidden from people; bots fill it in. A filled honeypot is never sent. */
  readonly honeypot = signal('');

  private readonly attempted = signal<ReadonlySet<FormStep>>(new Set());
  private readonly touched = signal<ReadonlySet<FormField>>(new Set());

  readonly invalid = computed<Record<FormField, boolean>>(() => ({
    services: this.services().length === 0,
    message: this.message().trim().length < MESSAGE_MIN_LENGTH,
    name: this.name().trim().length === 0,
    email: !EMAIL_PATTERN.test(this.email().trim())
  }));

  readonly messageLength = computed(() => this.message().trim().length);

  /** Fields whose error should be visible right now. */
  readonly visibleErrors = computed<Record<FormField, boolean>>(() => {
    const invalid = this.invalid();
    const attempted = this.attempted();
    const touched = this.touched();

    const show = (field: FormField, step: FormStep, hasValue: boolean) =>
      invalid[field] && (attempted.has(step) || (touched.has(field) && hasValue));

    return {
      services: show('services', 0, false),
      message: show('message', 1, this.message().trim().length > 0),
      name: show('name', 2, false),
      email: show('email', 2, this.email().trim().length > 0)
    };
  });

  stepIsValid(step: FormStep = this.step()): boolean {
    const invalid = this.invalid();
    return FIELDS_BY_STEP[step].every((field) => !invalid[field]);
  }

  /** The first invalid field on the current step, for focus management. */
  firstInvalidField(): FormField | null {
    const invalid = this.invalid();
    return FIELDS_BY_STEP[this.step()].find((field) => invalid[field]) ?? null;
  }

  toggleService(value: string): void {
    this.services.update((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  }

  /** Picking the selected option again clears it, since these are optional. */
  choose(field: 'budget' | 'timeline', value: string): void {
    const target = field === 'budget' ? this.budget : this.timeline;
    target.set(target() === value ? null : value);
  }

  touch(field: FormField): void {
    this.touched.update((current) => new Set(current).add(field));
  }

  /** Tries to move forward. Returns whether it did. */
  next(): boolean {
    const step = this.step();
    this.attempted.update((current) => new Set(current).add(step));

    if (!this.stepIsValid(step) || step === STEP_COUNT - 1) {
      return false;
    }

    this.step.set((step + 1) as FormStep);
    return true;
  }

  back(): void {
    const step = this.step();
    if (step > 0) {
      this.step.set((step - 1) as FormStep);
    }
  }

  /** Marks every step attempted and reports whether the whole form is valid. */
  validateAll(): boolean {
    this.attempted.set(new Set<FormStep>([0, 1, 2]));
    return ([0, 1, 2] as FormStep[]).every((step) => this.stepIsValid(step));
  }

  /** The earliest step with a problem, so a failed submit can send the visitor there. */
  firstInvalidStep(): FormStep | null {
    return ([0, 1, 2] as FormStep[]).find((step) => !this.stepIsValid(step)) ?? null;
  }

  isLikelyBot(): boolean {
    return this.honeypot().trim().length > 0;
  }

  toRequest(): ProjectRequest {
    return {
      services: [...this.services()],
      budget: this.budget(),
      timeline: this.timeline(),
      message: this.message().trim(),
      name: this.name().trim(),
      email: this.email().trim(),
      company: this.company().trim()
    };
  }

  reset(): void {
    this.step.set(0);
    this.services.set([]);
    this.budget.set(null);
    this.timeline.set(null);
    this.message.set('');
    this.name.set('');
    this.email.set('');
    this.company.set('');
    this.honeypot.set('');
    this.attempted.set(new Set());
    this.touched.set(new Set());
  }
}
