/**
 * The hero's resolve field: particles that start as friction — scattered,
 * drifting, coral — and settle into flow — ordered lanes converging into one
 * stream, coloured with the flow gradient — as the visitor scrolls.
 *
 * Framework-free on purpose. The hero component owns its lifecycle and feeds
 * it a progress value; this class only simulates and draws.
 *
 * Cost is bounded: particle count scales with area and is capped, colours come
 * from a small lookup table instead of per-particle strings, and the loop only
 * runs while the canvas is on screen and the tab is visible.
 */

export type Rgb = readonly [number, number, number];

export interface FieldPalette {
  friction: Rgb;
  flow: readonly [Rgb, Rgb, Rgb];
}

interface Particle {
  /** Friction state: a home position and a wobble around it. */
  homeX: number;
  homeY: number;
  wobbleX: number;
  wobbleY: number;
  wobbleSpeed: number;
  phase: number;
  /** Flow state: a lane and a place along it that advances over time. */
  lane: number;
  along: number;
  speed: number;
  /** When, in overall progress, this particle starts to resolve. */
  delay: number;
  /** A few particles are larger, read as work items moving through. */
  packet: boolean;
}

const COLOR_STEPS = 10;
const HUE_STEPS = 12;
const POINTER_RADIUS = 130;
const POINTER_PUSH = 28;

export class ResolveField {
  private readonly context: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private lanes = 16;
  private width = 0;
  private height = 0;
  private ratio = 1;

  private palette: FieldPalette | null = null;
  /** colors[resolve][hue] → css colour string. */
  private colors: string[][] = [];

  private target = 0;
  private shown = 0;
  private introStart = 0;
  private time = 0;
  private last = 0;
  private frame = 0;
  private running = false;

  private pointerX = -1e4;
  private pointerY = -1e4;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly options: { reducedMotion: boolean; introTarget?: number; introMs?: number }
  ) {
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) {
      throw new Error('Canvas 2D is unavailable.');
    }
    this.context = context;
  }

  setPalette(palette: FieldPalette): void {
    this.palette = palette;
    this.colors = [];

    for (let r = 0; r <= COLOR_STEPS; r++) {
      const resolve = r / COLOR_STEPS;
      const row: string[] = [];
      for (let h = 0; h < HUE_STEPS; h++) {
        const flow = sampleGradient(palette.flow, h / (HUE_STEPS - 1));
        const color = mix(palette.friction, flow, resolve);
        const alpha = 0.62 + resolve * 0.36;
        row.push(`rgba(${color[0]},${color[1]},${color[2]},${alpha.toFixed(3)})`);
      }
      this.colors.push(row);
    }

    if (!this.running) {
      this.draw();
    }
  }

  /** Overall progress, 0 = pure friction, 1 = pure flow. */
  setProgress(progress: number): void {
    this.target = progress;
    if (this.options.reducedMotion && !this.running) {
      this.draw();
    }
  }

  setPointer(x: number, y: number): void {
    this.pointerX = x;
    this.pointerY = y;
  }

  clearPointer(): void {
    this.pointerX = -1e4;
    this.pointerY = -1e4;
  }

  /** Fits the backing store to the element. Rebuilds particles only when the size really changed. */
  resize(width: number, height: number): void {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const widthChanged = Math.abs(width - this.width) > 1;
    const heightChanged = Math.abs(height - this.height) > 120;

    this.ratio = ratio;
    this.canvas.width = Math.round(width * ratio);
    this.canvas.height = Math.round(height * ratio);

    if (widthChanged || heightChanged || this.particles.length === 0) {
      this.width = width;
      this.height = height;
      this.seed();
    } else {
      this.height = height;
    }

    this.draw();
  }

  start(): void {
    if (this.running || this.options.reducedMotion) {
      return;
    }
    this.running = true;
    this.last = 0;
    if (!this.introStart) {
      this.introStart = performance.now();
    }
    this.frame = requestAnimationFrame(this.tick);
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.frame);
  }

  destroy(): void {
    this.stop();
    this.particles = [];
  }

  private seed(): void {
    const area = this.width * this.height;
    const count = Math.round(Math.min(1050, Math.max(240, area / 1350)));
    this.lanes = this.width < 700 ? 11 : 17;

    const random = mulberry32(7);
    this.particles = Array.from({ length: count }, (_, index) => {
      const homeX = random() * this.width;
      return {
        homeX,
        homeY: random() * this.height,
        wobbleX: 10 + random() * 46,
        wobbleY: 8 + random() * 38,
        wobbleSpeed: 0.18 + random() * 0.7,
        phase: random() * Math.PI * 2,
        lane: index % this.lanes,
        along: random(),
        speed: 0.018 + random() * 0.03,
        // Resolution sweeps from the left, with some scatter so it reads organic.
        delay: (homeX / this.width) * 0.5 + random() * 0.16,
        packet: index % 9 === 0
      };
    });
  }

  private readonly tick = (now: number): void => {
    if (!this.running) {
      return;
    }

    const dt = this.last ? Math.min((now - this.last) / 1000, 1 / 20) : 1 / 60;
    this.last = now;
    this.time += dt;

    // On arrival the field resolves part of the way on its own — enough to
    // show what scrolling will do — and the scroll position takes over from there.
    const introMs = this.options.introMs ?? 2600;
    const introT = Math.min(1, (now - this.introStart) / introMs);
    const intro = (this.options.introTarget ?? 0.28) * easeOutCubic(introT);
    const goal = Math.max(this.target, intro);

    this.shown += (goal - this.shown) * (1 - Math.exp(-dt * 5.5));

    this.draw();
    this.frame = requestAnimationFrame(this.tick);
  };

  private draw(): void {
    const { context, width, height, ratio } = this;
    if (!width || !height || this.colors.length === 0) {
      return;
    }

    const progress = this.options.reducedMotion ? 1 : this.shown;
    const t = this.options.reducedMotion ? 4 : this.time;

    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);

    const centerY = height * (width < 700 ? 0.3 : 0.4);
    const spread = height * (width < 700 ? 0.42 : 0.62);
    const lanes = this.lanes;

    // Faint lane guides appear as order emerges — the system behind the stream.
    if (progress > 0.05 && this.palette) {
      const guide = this.palette.flow[1];
      context.lineWidth = 1;
      context.strokeStyle = `rgba(${guide[0]},${guide[1]},${guide[2]},${(0.09 * progress).toFixed(3)})`;
      context.beginPath();
      for (let lane = 0; lane < lanes; lane++) {
        for (let step = 0; step <= 48; step++) {
          const x = (step / 48) * width;
          const y = this.laneY(lane, x / width, t, centerY, spread);
          if (step === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }
      }
      context.stroke();
    }

    const px = this.pointerX;
    const py = this.pointerY;

    for (const particle of this.particles) {
      const local = clamp01((progress - particle.delay * 0.62) / 0.38);
      const resolve = smoothstep(local);

      // Friction position: drifting around a home, never settling.
      const wobble = t * particle.wobbleSpeed + particle.phase;
      const chaosX = particle.homeX + Math.sin(wobble) * particle.wobbleX + Math.cos(wobble * 0.6) * 9;
      const chaosY = particle.homeY + Math.cos(wobble * 1.3) * particle.wobbleY;

      // Flow position: travelling along its lane.
      const along = (particle.along + t * particle.speed) % 1;
      const flowX = along * (width + 40) - 20;
      const flowY = this.laneY(particle.lane, flowX / width, t, centerY, spread);

      let x = chaosX + (flowX - chaosX) * resolve;
      let y = chaosY + (flowY - chaosY) * resolve;

      const dx = x - px;
      const dy = y - py;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < POINTER_RADIUS && distance > 0.01) {
        const push = (1 - distance / POINTER_RADIUS) ** 2 * POINTER_PUSH;
        x += (dx / distance) * push;
        y += (dy / distance) * push;
      }

      const hue = Math.min(HUE_STEPS - 1, Math.max(0, Math.floor((x / width) * HUE_STEPS)));
      context.fillStyle = this.colors[Math.round(resolve * COLOR_STEPS)][hue];

      const size = particle.packet && resolve > 0.6 ? 3.6 : 2 + resolve * 0.5;
      context.fillRect(x - size / 2, y - size / 2, size, size);
    }
  }

  /** Lanes start wide and converge into one stream: many inputs, one outcome. */
  private laneY(lane: number, xn: number, t: number, centerY: number, spread: number): number {
    const offset = lane / (this.lanes - 1) - 0.5;
    const converge = 1 - 0.78 * smoothstep(clamp01(xn * 1.08));
    const swell = Math.sin(xn * Math.PI * 1.4 + t * 0.32) * this.height * 0.05;
    const ripple = Math.sin(xn * 7 + lane * 0.8 + t * 0.9) * 3;
    return centerY + offset * spread * converge + swell + ripple;
  }
}

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function clamp01(value: number): number {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

function smoothstep(value: number): number {
  return value * value * (3 - 2 * value);
}

function easeOutCubic(value: number): number {
  return 1 - Math.pow(1 - value, 3);
}

function mix(a: Rgb, b: Rgb, amount: number): Rgb {
  return [
    Math.round(a[0] + (b[0] - a[0]) * amount),
    Math.round(a[1] + (b[1] - a[1]) * amount),
    Math.round(a[2] + (b[2] - a[2]) * amount)
  ];
}

function sampleGradient(stops: readonly [Rgb, Rgb, Rgb], position: number): Rgb {
  return position < 0.5 ? mix(stops[0], stops[1], position * 2) : mix(stops[1], stops[2], (position - 0.5) * 2);
}

/** Small seeded PRNG, so the field looks the same on every visit. */
function mulberry32(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

/** Parses `#rgb` / `#rrggbb` custom-property values into channels. */
export function parseHex(value: string, fallback: Rgb): Rgb {
  const hex = value.trim().replace('#', '');
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
  if (!/^[0-9a-f]{6}$/i.test(full)) {
    return fallback;
  }
  return [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)];
}
