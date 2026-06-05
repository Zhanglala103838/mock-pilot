import { Random } from "../random";
import {
  REGIONS, MOBILE_PREFIXES, SURNAMES, GIVEN_NAME_PARTS, STREETS,
  COMPANY_PREFIXES, COMPANY_INDUSTRIES, COMPANY_SUFFIXES, OCCUPATIONS,
  EMAIL_DOMAINS, ID_WEIGHTS, ID_CHECK_CODES, type RegionEntry,
} from "../constants";
import { formatDate, randomDate, calculateAge, type DateRange } from "../datetime";

export type Gender = "男" | "女";

export const PERSONAL_FIELDS = [
  { key: "name", label: "姓名", default: true },
  { key: "gender", label: "性别", default: true },
  { key: "phone", label: "手机号", default: true },
  { key: "idNumber", label: "身份证号", default: true },
  { key: "birthDate", label: "出生日期", default: false },
  { key: "age", label: "年龄", default: false },
  { key: "province", label: "省份", default: false },
  { key: "city", label: "城市", default: false },
  { key: "district", label: "区县", default: false },
  { key: "address", label: "联系地址", default: false },
  { key: "company", label: "所属公司", default: false },
  { key: "email", label: "邮箱", default: false },
  { key: "occupation", label: "职业", default: false },
] as const;

export type PersonalFieldKey = (typeof PERSONAL_FIELDS)[number]["key"];

export interface FullProfile {
  name: string;
  gender: Gender;
  phone: string;
  idNumber: string;
  birthDate: string;
  age: string;
  province: string;
  city: string;
  district: string;
  address: string;
  company: string;
  email: string;
  occupation: string;
}

export interface ProfileOptions {
  genderMode?: "random" | Gender;
  range?: DateRange;
  testSuffix?: boolean;
}

const DEFAULT_RANGE: DateRange = { start: new Date(1980, 0, 1), end: new Date(2005, 11, 31) };

export function generateName(rnd: Random, gender: Gender): string {
  const surname = rnd.pick(SURNAMES);
  const parts = GIVEN_NAME_PARTS[gender];
  const length = rnd.int(1, 2);
  let givenName = "";
  let guard = 0;
  while (givenName.length < length && guard++ < 20) {
    const next = rnd.pick(parts);
    if (!givenName.includes(next)) givenName += next;
  }
  return `${surname}${givenName}`;
}

export function generatePhone(rnd: Random): string {
  return `${rnd.pick(MOBILE_PREFIXES)}${rnd.digits(8)}`;
}

/** 顺序码：末位奇偶决定性别（男奇女偶），范围 001-999。 */
export function generateSequence(rnd: Random, gender: Gender): string {
  const parity = gender === "男" ? 1 : 0;
  let sequence = rnd.int(1, 999);
  if (sequence % 2 !== parity) sequence += 1;
  if (sequence > 999) sequence -= 2;
  return String(sequence).padStart(3, "0");
}

/** GB 11643 校验位。base 为前 17 位。 */
export function idChecksum(base17: string): string {
  const sum = base17
    .split("")
    .reduce((total, digit, index) => total + Number(digit) * ID_WEIGHTS[index], 0);
  return ID_CHECK_CODES[sum % 11];
}

export function generateIdNumber(rnd: Random, regionCode: string, birthDate: Date, gender: Gender): string {
  const birthPart = formatDate(birthDate).replaceAll("-", "");
  const sequence = generateSequence(rnd, gender);
  const base = `${regionCode}${birthPart}${sequence}`;
  return `${base}${idChecksum(base)}`;
}

export function generateAddress(rnd: Random, region: RegionEntry): string {
  return `${region.province}${region.city}${region.district}${rnd.pick(STREETS)}${rnd.int(1, 288)}号${rnd.int(1, 18)}单元${rnd.int(101, 2804)}室`;
}

export function generateCompany(rnd: Random, region: RegionEntry): string {
  return `${region.city}${rnd.pick(COMPANY_PREFIXES)}${rnd.pick(COMPANY_INDUSTRIES)}${rnd.pick(COMPANY_SUFFIXES)}`;
}

export function generateEmail(name: string, phone: string, domain: string): string {
  const encodedName = Array.from(name).map((char) => char.charCodeAt(0).toString(36)).join("");
  return `${encodedName}.${phone.slice(-4)}@${domain}`.toLowerCase();
}

export function createProfile(rnd: Random, opts: ProfileOptions = {}): FullProfile {
  const { genderMode = "random", range = DEFAULT_RANGE, testSuffix = false } = opts;
  const gender: Gender = genderMode === "男" || genderMode === "女" ? genderMode : rnd.pick(["男", "女"]);
  const region = rnd.pick(REGIONS);
  const birthDate = randomDate(rnd, range.start, range.end);
  const rawName = generateName(rnd, gender);
  const name = testSuffix ? `${rawName}(测)` : rawName;
  const phone = generatePhone(rnd);

  return {
    name,
    gender,
    phone,
    idNumber: generateIdNumber(rnd, region.code, birthDate, gender),
    birthDate: formatDate(birthDate),
    age: String(calculateAge(birthDate)),
    province: region.province,
    city: region.city,
    district: region.district,
    address: generateAddress(rnd, region),
    company: generateCompany(rnd, region),
    email: generateEmail(rawName, phone, rnd.pick(EMAIL_DOMAINS)),
    occupation: rnd.pick(OCCUPATIONS),
  };
}

export function createProfiles(
  rnd: Random,
  count: number,
  fields: readonly string[],
  opts: ProfileOptions = {},
): Record<string, string>[] {
  return Array.from({ length: count }, () => {
    const profile = createProfile(rnd, opts);
    return fields.reduce<Record<string, string>>((record, key) => {
      record[key] = profile[key as keyof FullProfile];
      return record;
    }, {});
  });
}
