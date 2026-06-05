import { Random } from "../random";
import { EMAIL_DOMAINS } from "../constants";
import { formatDate, randomDate } from "../datetime";

export type GeneralKind = "all" | "string" | "number" | "datetime" | "web" | "color" | "enum";

export const GENERAL_KIND_LABELS: Record<GeneralKind, string> = {
  all: "全量字段",
  string: "随机字符串",
  number: "数字",
  datetime: "日期时间",
  web: "URL / IP",
  color: "颜色值",
  enum: "枚举 / 布尔 / 空值",
};

export type GeneralRecord = Record<string, string | number | boolean | null>;

const FIELDS_BY_KIND: Record<Exclude<GeneralKind, "all">, string[]> = {
  string: ["index", "stringValue"],
  number: ["index", "integerValue", "decimalValue", "amount", "percent"],
  datetime: ["index", "dateValue", "timestamp"],
  web: ["index", "url", "ipv4"],
  color: ["index", "hexColor", "rgbColor"],
  enum: ["index", "booleanValue", "enumValue", "nullableValue"],
};

export function createGeneralRecord(rnd: Random, kind: GeneralKind, index: number): GeneralRecord {
  const all: GeneralRecord = {
    index,
    stringValue: `mock_${rnd.slug(10)}`,
    integerValue: rnd.int(1000, 99999),
    decimalValue: Number((rnd.float() * 1000).toFixed(2)),
    amount: Number((rnd.float() * 9999 + 10).toFixed(2)),
    percent: `${rnd.int(1, 99)}%`,
    booleanValue: rnd.pick([true, false]),
    enumValue: rnd.pick(["draft", "pending", "active", "archived"]),
    nullableValue: rnd.pick([null, "", "N/A", `fallback_${rnd.slug(4)}`]),
    dateValue: formatDate(randomDate(rnd, new Date(2024, 0, 1), new Date(2026, 11, 31))),
    timestamp: randomDate(rnd, new Date(2024, 0, 1), new Date(2026, 11, 31)).toISOString(),
    url: `https://${rnd.pick(EMAIL_DOMAINS)}/mock/${rnd.slug(8)}`,
    ipv4: `${rnd.int(10, 223)}.${rnd.int(0, 255)}.${rnd.int(0, 255)}.${rnd.int(1, 254)}`,
    hexColor: rnd.hexColor(),
    rgbColor: `rgb(${rnd.int(0, 255)}, ${rnd.int(0, 255)}, ${rnd.int(0, 255)})`,
  };

  if (kind === "all") return all;
  return FIELDS_BY_KIND[kind].reduce<GeneralRecord>((record, key) => {
    record[key] = all[key];
    return record;
  }, {});
}

export function createGeneralRecords(rnd: Random, count: number, kind: GeneralKind): GeneralRecord[] {
  return Array.from({ length: count }, (_, i) => createGeneralRecord(rnd, kind, i + 1));
}
