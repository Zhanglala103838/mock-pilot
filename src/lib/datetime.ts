import type { Random } from "./random";

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function parseDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(year, month - 1, day);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function randomDate(rnd: Random, start: Date, end: Date): Date {
  return new Date(rnd.int(start.getTime(), end.getTime()));
}

export function calculateAge(birthDate: Date, today = new Date()): number {
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (today < birthdayThisYear) age -= 1;
  return age;
}

export interface DateRange {
  start: Date;
  end: Date;
}

/** 规整出生日期范围：解析失败用默认值，start>end 自动对调。 */
export function normalizeDateRange(startValue: string, endValue: string): DateRange {
  let start = parseDate(startValue) ?? new Date(1980, 0, 1);
  let end = parseDate(endValue) ?? new Date(2005, 11, 31);
  if (start > end) [start, end] = [end, start];
  return { start, end };
}
