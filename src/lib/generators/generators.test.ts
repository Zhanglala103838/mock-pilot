import { describe, it, expect } from "vitest";
import { Random, mulberry32, clamp } from "../random";
import {
  idChecksum, generateIdNumber, createProfile, createProfiles, generatePhone, PERSONAL_FIELDS,
} from "./personal";
import { createUuids, formatUuid } from "./uuid";
import { createGeneralRecords } from "./general";
import { createAccountRecords } from "./account";
import { createBusinessRecords } from "./business";
import { createApiResponse, normalizeEndpoint } from "./api";
import { MOBILE_PREFIXES } from "../constants";

function seeded(seed = 42): Random {
  return new Random(mulberry32(seed));
}

describe("身份证 GB 11643 校验位", () => {
  it("命中国标官方示例向量 44052418800101001 → 4", () => {
    expect(idChecksum("44052418800101001")).toBe("4");
  });

  it("生成的 18 位身份证校验位自洽", () => {
    const rnd = seeded();
    for (let i = 0; i < 50; i += 1) {
      const id = generateIdNumber(rnd, "110105", new Date(1995, 5, 15), "男");
      expect(id).toHaveLength(18);
      expect(idChecksum(id.slice(0, 17))).toBe(id[17]);
    }
  });

  it("末位顺序码奇偶对应性别（男奇女偶）", () => {
    const rnd = seeded(7);
    for (let i = 0; i < 30; i += 1) {
      const male = generateIdNumber(rnd, "110105", new Date(2000, 0, 1), "男");
      const female = generateIdNumber(rnd, "110105", new Date(2000, 0, 1), "女");
      expect(Number(male[16]) % 2).toBe(1);
      expect(Number(female[16]) % 2).toBe(0);
    }
  });
});

describe("手机号", () => {
  it("11 位且号段合法", () => {
    const rnd = seeded();
    for (let i = 0; i < 50; i += 1) {
      const phone = generatePhone(rnd);
      expect(phone).toMatch(/^\d{11}$/);
      expect(MOBILE_PREFIXES).toContain(phone.slice(0, 3));
    }
  });
});

describe("个人档案", () => {
  it("createProfiles 只产出勾选字段", () => {
    const rnd = seeded();
    const fields = ["name", "phone", "email"];
    const rows = createProfiles(rnd, 5, fields, {});
    expect(rows).toHaveLength(5);
    for (const row of rows) {
      expect(Object.keys(row).sort()).toEqual([...fields].sort());
    }
  });

  it("genderMode 固定时性别一致；testSuffix 追加 (测)", () => {
    const rnd = seeded();
    const profile = createProfile(rnd, { genderMode: "女", testSuffix: true });
    expect(profile.gender).toBe("女");
    expect(profile.name.endsWith("(测)")).toBe(true);
  });

  it("PERSONAL_FIELDS 默认四项为常用字段", () => {
    const defaults = PERSONAL_FIELDS.filter((f) => f.default).map((f) => f.key);
    expect(defaults).toEqual(["name", "gender", "phone", "idNumber"]);
  });
});

describe("UUID", () => {
  it("标准格式 36 位含连字符", () => {
    const rnd = seeded();
    const [{ uuid }] = createUuids(rnd, 1, {});
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  });

  it("compact 去连字符 + uppercase 大写", () => {
    const out = formatUuid("aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee", { compact: true, uppercase: true });
    expect(out).toBe("AAAAAAAABBBB4CCC8DDDEEEEEEEEEEEE");
    expect(out).not.toContain("-");
  });
});

describe("通用 / 账号 / 业务生成器字段完整性", () => {
  it("general all 种类含全部字段", () => {
    const rnd = seeded();
    const [row] = createGeneralRecords(rnd, 1, "all");
    expect(Object.keys(row)).toContain("hexColor");
    expect(Object.keys(row)).toContain("ipv4");
  });

  it("account 含 apiKey/token 前缀", () => {
    const rnd = seeded();
    const [acc] = createAccountRecords(rnd, 1, "admin");
    expect(acc.role).toBe("管理员");
    expect(acc.apiKey.startsWith("mk_")).toBe(true);
    expect(acc.token.startsWith("tok_")).toBe(true);
  });

  it("business order 含订单与支付字段", () => {
    const rnd = seeded();
    const [order] = createBusinessRecords(rnd, 1, "order");
    expect(order.orderId).toBeTruthy();
    expect(order.paymentChannel).toBeTruthy();
  });
});

describe("接口响应", () => {
  it("success 含分页与 data 数组", () => {
    const rnd = seeded();
    const res = createApiResponse(rnd, { method: "GET", status: "success", endpoint: "items", pageSize: 5 });
    expect(res.code).toBe(0);
    expect(Array.isArray(res.data)).toBe(true);
    expect((res.data as unknown[]).length).toBe(5);
    expect((res.request as { endpoint: string }).endpoint).toBe("/items");
  });

  it("error 状态含 error.traceId 且 data 为 null", () => {
    const rnd = seeded();
    const res = createApiResponse(rnd, { method: "POST", status: "server", endpoint: "/x", pageSize: 0 });
    expect(res.data).toBeNull();
    expect((res.error as { traceId: string }).traceId.startsWith("trace_")).toBe(true);
  });

  it("normalizeEndpoint 补斜杠/兜底", () => {
    expect(normalizeEndpoint("a/b")).toBe("/a/b");
    expect(normalizeEndpoint("")).toBe("/api/mock/items");
  });
});

describe("clamp", () => {
  it("夹取边界", () => {
    expect(clamp(5, 1, 3)).toBe(3);
    expect(clamp(-1, 0, 10)).toBe(0);
  });
});
