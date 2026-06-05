import { useState } from "react";
import { Download, Copy } from "lucide-react";
import { Drawer, DrawerContent, Button, Segmented, CodeBlock, Stack, Text, ScrollArea } from "@hulianui/ui";
import { exportRecords, EXPORT_FORMAT_META, type ExportFormat, type Row } from "../lib/export";
import { copyText, downloadTextFile } from "../lib/clipboard";

const FORMATS: ExportFormat[] = ["json", "csv", "sql", "ts"];

export function ExportDrawer({
  open,
  onOpenChange,
  records,
  name,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  records: Row[];
  name: string;
}) {
  const [format, setFormat] = useState<ExportFormat>("json");
  const meta = EXPORT_FORMAT_META[format];
  const content = exportRecords(records, format, name);
  const bom = format === "csv" ? "﻿" : "";

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent
        side="right"
        title="导出数据"
        description={`${records.length} 条记录 · 选择目标格式预览并复制 / 下载`}
        className="w-[min(640px,92vw)]"
        footer={
          <Stack direction="row" align="center" justify="between" gap={2} className="w-full">
            <Text size="xs" tone="muted" as="span">{meta.label} · {name}.{meta.ext}</Text>
            <Stack direction="row" gap={2}>
              <Button
                variant="outline"
                onClick={() => copyText(content, `${meta.label} 已复制`)}
              >
                <Copy className="size-4" /> 复制
              </Button>
              <Button
                onClick={() =>
                  downloadTextFile(
                    bom + content,
                    `${name}-${Date.now()}.${meta.ext}`,
                    "text/plain;charset=utf-8",
                  )
                }
              >
                <Download className="size-4" /> 下载
              </Button>
            </Stack>
          </Stack>
        }
      >
        <Stack gap={3}>
          <Segmented
            aria-label="导出格式"
            value={format}
            onValueChange={(v) => setFormat(v as ExportFormat)}
            items={FORMATS.map((f) => ({ value: f, label: EXPORT_FORMAT_META[f].label }))}
          />
          <ScrollArea className="max-h-[calc(100dvh-16rem)]">
            <CodeBlock code={content || "// 暂无数据"} lang={meta.lang} copyable={false} />
          </ScrollArea>
        </Stack>
      </DrawerContent>
    </Drawer>
  );
}
