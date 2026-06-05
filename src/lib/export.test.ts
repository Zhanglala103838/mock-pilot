import { describe, it, expect } from "vitest";
import { toCsv, toJson, toSqlInsert, toTsInterface, exportRecords, formatValue, toPascalCase } from "./export";

const rows = [
  { id: 1, name: "张三", active: true, note: null },
  { id: 2, name: '李,四"测', active: false, note: "x" },
];

describe("CSV", () => {
  it("含逗号/引号的值被包裹转义", () => {
    const csv = toCsv(rows);
    const lines = csv.split("\n");
    expect(lines[0]).toBe("id,name,active,note");
    expect(lines[2]).toContain('"李,四""测"');
  });

  it("空数组返回空串", () => {
    expect(toCsv([])).toBe("");
  });
});

describe("SQL INSERT", () => {
  it("字符串单引号转义、null→NULL、boolean→TRUE/FALSE、数字裸值", () => {
    const sql = toSqlInsert(rows, "users");
    expect(sql).toContain("INSERT INTO `users` (`id`, `name`, `active`, `note`) VALUES (1, '张三', TRUE, NULL);");
    expect(sql).toContain("'李,四\"测'");
    expect(sql).toContain("VALUES (2,");
  });
});

describe("TS interface", () => {
  it("按样本推断类型并归并 null", () => {
    const ts = toTsInterface(rows, "User");
    expect(ts).toContain("export interface User {");
    expect(ts).toContain("id: number;");
    expect(ts).toContain("active: boolean;");
    expect(ts).toContain("note: string | null;");
  });
});

describe("formatValue / JSON / dispatch", () => {
  it("formatValue 处理 null/对象/标量", () => {
    expect(formatValue(null)).toBe("null");
    expect(formatValue({ a: 1 })).toBe('{"a":1}');
    expect(formatValue(3)).toBe("3");
  });

  it("toJson 2 空格缩进", () => {
    expect(toJson([{ a: 1 }])).toBe('[\n  {\n    "a": 1\n  }\n]');
  });

  it("exportRecords 按格式分派；ts 名转 PascalCase", () => {
    expect(exportRecords(rows, "json")).toBe(toJson(rows));
    expect(exportRecords(rows, "ts", "mock_users")).toContain("interface MockUsers");
  });

  it("toPascalCase", () => {
    expect(toPascalCase("mock_data-table")).toBe("MockDataTable");
  });
});
