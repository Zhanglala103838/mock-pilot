import { Random } from "../random";

export interface UuidOptions {
  uppercase?: boolean;
  compact?: boolean;
}

/** UUID v4：优先用 Web Crypto，降级到注入的 Random。 */
export function createUuid(rnd: Random): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i += 1) bytes[i] = rnd.int(0, 255);
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function formatUuid(uuid: string, opts: UuidOptions): string {
  const compacted = opts.compact ? uuid.replaceAll("-", "") : uuid;
  return opts.uppercase ? compacted.toUpperCase() : compacted;
}

export function createUuids(rnd: Random, count: number, opts: UuidOptions = {}): { uuid: string }[] {
  return Array.from({ length: count }, () => ({ uuid: formatUuid(createUuid(rnd), opts) }));
}

export function uuidFormatLabel(opts: UuidOptions): string {
  const caseLabel = opts.uppercase ? "大写" : "小写";
  const shapeLabel = opts.compact ? "32 位无连字符" : "标准连字符格式";
  return `${caseLabel} · ${shapeLabel}`;
}
