// 可注入的随机源：默认 Math.random，测试传 mulberry32 做确定性断言。
export type RngSource = () => number;

/** 确定性 PRNG（mulberry32），仅用于测试可复现。 */
export function mulberry32(seed: number): RngSource {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ALNUM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const HEX = "0123456789abcdef";

export class Random {
  constructor(private readonly next: RngSource = Math.random) {}

  /** [min, max] 闭区间整数。 */
  int(min: number, max: number): number {
    const lo = Math.ceil(min);
    const hi = Math.floor(max);
    return Math.floor(this.next() * (hi - lo + 1)) + lo;
  }

  float(): number {
    return this.next();
  }

  pick<T>(items: readonly T[]): T {
    return items[this.int(0, items.length - 1)];
  }

  digits(length: number): string {
    return Array.from({ length }, () => this.int(0, 9)).join("");
  }

  alphaNumeric(length: number): string {
    return Array.from({ length }, () => ALNUM[this.int(0, ALNUM.length - 1)]).join("");
  }

  slug(length: number): string {
    return this.alphaNumeric(length).toLowerCase();
  }

  hex(length: number): string {
    return Array.from({ length }, () => HEX[this.int(0, HEX.length - 1)]).join("");
  }

  hexColor(): string {
    return `#${this.hex(6)}`;
  }
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
