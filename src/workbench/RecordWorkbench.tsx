import { useMemo, useState, type ReactNode } from "react";
import { Download, Table2, Braces, LayoutGrid } from "lucide-react";
import {
  ProTable, JsonViewer, Segmented, Button, Empty, Card, Stack, Text,
  type ColumnDef,
} from "@hulianui/ui";
import { outputLabel } from "../lib/constants";
import { type Row } from "../lib/export";
import { CopyCell } from "./CopyCell";
import { CardView } from "./CardView";
import { ExportDrawer } from "./ExportDrawer";
import { copyText } from "../lib/clipboard";
import { toJson, toCsv } from "../lib/export";

type ViewMode = "table" | "json" | "cards";
const PAGE_SIZE = 20;

export interface RecordWorkbenchProps {
  /** 左侧配置区（字段勾选、数量、策略、生成按钮）。 */
  config: ReactNode;
  records: Row[];
  /** 导出文件名 / SQL 表名 / TS 接口名基。 */
  name: string;
  /** 概览文案（条数、字段等）。 */
  summary?: ReactNode;
  emptyHint?: string;
  /** ProTable 工具栏刷新 → 重新生成一批。 */
  onReload?: () => void;
}

function buildColumns(records: Row[]): ColumnDef<Row, unknown>[] {
  if (records.length === 0) return [];
  const keys = Object.keys(records[0]);
  const hasIndex = keys.includes("index");
  const cols: ColumnDef<Row, unknown>[] = keys.map((key) => ({
    accessorKey: key,
    header: outputLabel(key),
    cell: ({ getValue }) => <CopyCell value={getValue()} label={outputLabel(key)} />,
  }));
  if (!hasIndex) {
    cols.unshift({
      id: "__no",
      header: "#",
      cell: ({ row }) => <Text as="span" size="xs" tone="muted" className="font-mono">{row.index + 1}</Text>,
    });
  }
  return cols;
}

export function RecordWorkbench({ config, records, name, summary, emptyHint, onReload }: RecordWorkbenchProps) {
  const [view, setView] = useState<ViewMode>("table");
  const [page, setPage] = useState(1);
  const [exportOpen, setExportOpen] = useState(false);

  const columns = useMemo(() => buildColumns(records), [records]);
  const pageData = useMemo(
    () => records.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [records, page],
  );

  const empty = records.length === 0;

  return (
    <Stack gap={4} className="lg:flex-row lg:items-start">
      {/* 左·配置区 */}
      <Card className="shrink-0 p-4 lg:sticky lg:top-4 lg:w-72">{config}</Card>

      {/* 主·预览区 */}
      <Stack gap={0} className="min-w-0 flex-1">
        <Stack direction="row" wrap align="center" justify="between" gap={3} className="mb-3">
          <Text size="sm" tone="muted">{summary}</Text>
          <Stack direction="row" align="center" gap={2}>
            <Segmented
              size="sm"
              aria-label="预览视图"
              value={view}
              onValueChange={(v) => setView(v as ViewMode)}
              items={[
                { value: "table", label: <Table2 className="size-4" />, ariaLabel: "表格" },
                { value: "json", label: <Braces className="size-4" />, ariaLabel: "JSON" },
                { value: "cards", label: <LayoutGrid className="size-4" />, ariaLabel: "卡片" },
              ]}
            />
            <Button variant="outline" size="sm" disabled={empty} onClick={() => copyText(toJson(records), "JSON 已复制")}>
              JSON
            </Button>
            <Button variant="outline" size="sm" disabled={empty} onClick={() => copyText(toCsv(records), "CSV 已复制")}>
              CSV
            </Button>
            <Button size="sm" disabled={empty} onClick={() => setExportOpen(true)}>
              <Download className="size-4" /> 导出
            </Button>
          </Stack>
        </Stack>

        {empty ? (
          <Empty title="还没有生成数据" description={emptyHint ?? "在左侧调整配置后点击「生成」。"} />
        ) : view === "table" ? (
          <ProTable<Row>
            columns={columns}
            data={pageData}
            density="middle"
            onReload={onReload}
            pagination={{
              page,
              pageSize: PAGE_SIZE,
              total: records.length,
              onPageChange: setPage,
            }}
          />
        ) : view === "json" ? (
          <Card className="overflow-auto p-4">
            <JsonViewer data={records} rootName={name} defaultExpandedDepth={2} />
          </Card>
        ) : (
          <CardView records={records} />
        )}
      </Stack>

      <ExportDrawer open={exportOpen} onOpenChange={setExportOpen} records={records} name={name} />
    </Stack>
  );
}
