// 多格式导出：JSON / CSV / SQL INSERT / TS interface。
export type ExportFormat = "json" | "csv" | "sql" | "ts";

export const EXPORT_FORMAT_META: Record<ExportFormat, { label: string; lang: string; ext: string }> = {
  json: { label: "JSON", lang: "json", ext: "json" },
  csv: { label: "CSV", lang: "csv", ext: "csv" },
  sql: { label: "SQL INSERT", lang: "sql", ext: "sql" },
  ts: { label: "TS interface", lang: "typescript", ext: "ts" },
};

export type Row = Record<string, unknown>;

export function formatValue(value: unknown): string {
  if (value === null || value === undefined) return "null";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

// ---- JSON ----
export function toJson(records: Row[]): string {
  return JSON.stringify(records, null, 2);
}

// ---- CSV（BOM 在下载时另加） ----
function csvEscape(value: unknown): string {
  const normalized = formatValue(value);
  return /[",\n]/.test(normalized) ? `"${normalized.replaceAll('"', '""')}"` : normalized;
}

export function toCsv(records: Row[]): string {
  if (records.length === 0) return "";
  const headers = Object.keys(records[0]);
  return [
    headers.map(csvEscape).join(","),
    ...records.map((record) => headers.map((h) => csvEscape(record[h])).join(",")),
  ].join("\n");
}

// ---- SQL INSERT ----
function sqlLiteral(value: unknown): string {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
  return `'${String(value).replaceAll("'", "''")}'`;
}

export function toSqlInsert(records: Row[], tableName = "mock_data"): string {
  if (records.length === 0) return "";
  const columns = Object.keys(records[0]);
  const colList = columns.map((c) => `\`${c}\``).join(", ");
  return records
    .map((record) => {
      const values = columns.map((c) => sqlLiteral(record[c])).join(", ");
      return `INSERT INTO \`${tableName}\` (${colList}) VALUES (${values});`;
    })
    .join("\n");
}

// ---- TS interface（按首行各字段值推断类型，扫描全列样本归并 null） ----
function inferType(records: Row[], key: string): string {
  let nullable = false;
  const types = new Set<string>();
  for (const record of records) {
    const v = record[key];
    if (v === null || v === undefined) {
      nullable = true;
      continue;
    }
    if (typeof v === "number") types.add("number");
    else if (typeof v === "boolean") types.add("boolean");
    else if (typeof v === "object") types.add("Record<string, unknown>");
    else types.add("string");
  }
  if (types.size === 0) types.add("string");
  const base = Array.from(types).join(" | ");
  return nullable ? `${base} | null` : base;
}

export function toTsInterface(records: Row[], typeName = "MockRecord"): string {
  if (records.length === 0) return `export interface ${typeName} {}`;
  const columns = Object.keys(records[0]);
  const lines = columns.map((key) => `  ${key}: ${inferType(records, key)};`);
  return `export interface ${typeName} {\n${lines.join("\n")}\n}`;
}

export function exportRecords(records: Row[], format: ExportFormat, name = "mock_data"): string {
  switch (format) {
    case "json":
      return toJson(records);
    case "csv":
      return toCsv(records);
    case "sql":
      return toSqlInsert(records, name);
    case "ts":
      return toTsInterface(records, toPascalCase(name));
  }
}

export function toPascalCase(value: string): string {
  return value
    .split(/[_\-\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
