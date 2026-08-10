/**
 * Motion primitives translated from apple-design.md.
 *
 * The through-line: motion starts from the current on-screen value, inherits
 * the user's velocity, projects momentum forward, and can be grabbed and
 * reversed at any instant. Springs are what make that possible, because they
 * are inherently interruptible and velocity-aware.
 */

/**
 * Where a flick would come to rest, using the exponential-decay model iOS
 * ships (§6). Note this is deliberately *not* the physics-textbook
 * `v² / (2·deceleration)` form.
 *
 * @param initialVelocity release velocity in px/s
 * @param decelerationRate 0.998 for normal scroll feel, 0.99 for snappier
 * @returns the distance still to travel, in px
 */
export function project(initialVelocity: number, decelerationRate = 0.998): number {
  return ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/**
 * Progressive resistance past a boundary (§9). The further past the bound the
 * user drags, the less the element follows — real things slow before they
 * stop, and a hard stop reads as "frozen" rather than "there is nothing more
 * here".
 */
export function rubberband(overshoot: number, dimension: number, constant = 0.55): number {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

/**
 * A short history of pointer positions, so a gesture can hand its exact
 * release velocity to whatever animates next (§2, §5). Using only the last
 * two events makes the velocity jittery; using the whole gesture makes it
 * stale — a small trailing window is the useful middle.
 */
export class VelocityTracker {
  private readonly samples: { position: number; time: number }[] = [];

  constructor(private readonly windowMs = 100) {}

  reset(position: number, time = performance.now()): void {
    this.samples.length = 0;
    this.samples.push({ position, time });
  }

  add(position: number, time = performance.now()): void {
    this.samples.push({ position, time });
    while (this.samples.length > 2 && time - this.samples[0].time > this.windowMs) {
      this.samples.shift();
    }
  }

  /** Velocity in px/s over the trailing window. */
  velocity(): number {
    if (this.samples.length < 2) {
      return 0;
    }

    const first = this.samples[0];
    const last = this.samples[this.samples.length - 1];
    const elapsed = last.time - first.time;

    // A pointer that stopped moving before release has no momentum, even if
    // it was fast a moment ago.
    if (elapsed <= 0 || performance.now() - last.time > this.windowMs) {
      return 0;
    }

    return ((last.position - first.position) / elapsed) * 1000;
  }
}

export interface SpringOptions {
  /** Damping ratio. 1 = critically damped (no overshoot); below 1 overshoots. */
  damping?: number;
  /** How quickly the value reaches the target, in seconds. Not a duration. */
  response?: number;
  /** Distance below which the spring is treated as settled. */
  epsilon?: number;
  /** Velocity below which the spring is treated as settled. */
  restVelocity?: number;
}

/**
 * A spring parameterised the way Apple parameterises them — damping ratio and
 * response rather than mass/stiffness/damping (§4).
 *
 * Two properties matter more than the integration scheme:
 *
 * 1. Re-targeting never resets `value` or `velocity`, so a new target picked
 *    up mid-flight continues from the presentation value at the current
 *    velocity. That is what makes an interruption invisible instead of a jump,
 *    and what avoids the "brick wall" at a reversal (§3).
 * 2. `velocity` is writable, so a gesture can hand its release velocity
 *    straight to the animation and leave no seam between drag and animate (§5).
 */
export class Spring {
  velocity = 0;
  private currentTarget: number;
  private readonly damping: number;
  private readonly response: number;
  private readonly epsilon: number;
  private readonly restVelocity: number;

  constructor(public value = 0, options: SpringOptions = {}) {
    this.currentTarget = value;
    this.damping = options.damping ?? 1;
    this.response = options.response ?? 0.4;
    this.epsilon = options.epsilon ?? 0.005;
    this.restVelocity = options.restVelocity ?? 0.05;
  }

  get target(): number {
    return this.currentTarget;
  }

  /** Re-aim the spring. Position and velocity carry through untouched. */
  set target(value: number) {
    this.currentTarget = value;
  }

  get settled(): boolean {
    return Math.abs(this.value - this.currentTarget) < this.epsilon && Math.abs(this.velocity) < this.restVelocity;
  }

  /** Snap to a value with no motion — for initialisation, not for animation. */
  reset(value: number): void {
    this.value = value;
    this.currentTarget = value;
    this.velocity = 0;
  }

  /**
   * Advance the simulation.
   *
   * @param dt seconds since the previous frame
   */
  step(dt: number): number {
    // A long frame gap (tab restored, main thread stall) must not be
    // integrated in one go, or the spring explodes.
    const step = Math.min(dt, 1 / 30);
    const omega = (2 * Math.PI) / this.response;

    const displacement = this.value - this.currentTarget;
    const acceleration = -omega * omega * displacement - 2 * this.damping * omega * this.velocity;

    this.velocity += acceleration * step;
    this.value += this.velocity * step;

    if (this.settled) {
      this.value = this.currentTarget;
      this.velocity = 0;
    }

    return this.value;
  }
}

/** Live `prefers-reduced-motion` state, so behaviour follows the setting. */
export function reducedMotionQuery(): MediaQueryList | null {
  return typeof window !== 'undefined' && 'matchMedia' in window
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;
}

/** True when the pointer cannot hover precisely — touch, mostly. */
export function isCoarsePointer(): boolean {
  return typeof window !== 'undefined' && 'matchMedia' in window
    ? window.matchMedia('(hover: none), (pointer: coarse)').matches
    : false;
}
