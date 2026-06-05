import { useEffect, useState } from "react";
import { NumberField, Select, SelectTrigger, SelectContent, SelectItem, Field } from "@hulianui/ui";
import { Random } from "../lib/random";
import { createGeneralRecords, GENERAL_KIND_LABELS, type GeneralKind } from "../lib/generators/general";
import { RecordWorkbench } from "../workbench/RecordWorkbench";
import { RegenerateButton, ConfigStack } from "../workbench/panel-kit";
import type { Row } from "../lib/export";
import { workspace } from "../store/workspace";

const rnd = new Random();
const KINDS = Object.keys(GENERAL_KIND_LABELS) as GeneralKind[];

export function GeneralPanel() {
  const [count, setCount] = useState(20);
  const [kind, setKind] = useState<GeneralKind>("all");
  const [records, setRecords] = useState<Row[]>([]);

  const generate = () => setRecords(createGeneralRecords(rnd, count, kind) as Row[]);
  useEffect(generate, [count, kind]); // eslint-disable-line react-hooks/exhaustive-deps
  const commit = () => {
    generate();
    workspace.pushHistory({ tool: "general", toolLabel: "通用字段", count });
  };

  const config = (
    <ConfigStack>
      <Field label="生成数量">
        <NumberField value={count} onValueChange={(v) => setCount(v ?? 1)} min={1} max={300} step={1} />
      </Field>
      <Field label="字段种类">
        <Select items={KINDS.map((k) => ({ value: k, label: GENERAL_KIND_LABELS[k] }))} value={kind} onValueChange={(v) => setKind((v as GeneralKind) ?? "all")}>
          <SelectTrigger />
          <SelectContent>
            {KINDS.map((k) => (
              <SelectItem key={k} value={k}>{GENERAL_KIND_LABELS[k]}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <RegenerateButton onClick={commit} />
    </ConfigStack>
  );

  return (
    <RecordWorkbench
      config={config}
      records={records}
      name="mock_general"
      onReload={commit}
      summary={`${records.length} 条 · ${GENERAL_KIND_LABELS[kind]}`}
    />
  );
}
