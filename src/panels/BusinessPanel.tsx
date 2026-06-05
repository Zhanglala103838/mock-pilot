import { useEffect, useState } from "react";
import { NumberField, Select, SelectTrigger, SelectContent, SelectItem, Field } from "@hulianui/ui";
import { Random } from "../lib/random";
import { createBusinessRecords, BUSINESS_DOMAIN_LABELS, type BusinessDomain } from "../lib/generators/business";
import { RecordWorkbench } from "../workbench/RecordWorkbench";
import { RegenerateButton, ConfigStack } from "../workbench/panel-kit";
import type { Row } from "../lib/export";
import { workspace } from "../store/workspace";

const rnd = new Random();
const DOMAINS = Object.keys(BUSINESS_DOMAIN_LABELS) as BusinessDomain[];

export function BusinessPanel() {
  const [count, setCount] = useState(20);
  const [domain, setDomain] = useState<BusinessDomain>("all");
  const [records, setRecords] = useState<Row[]>([]);

  const generate = () => setRecords(createBusinessRecords(rnd, count, domain));
  useEffect(generate, [count, domain]); // eslint-disable-line react-hooks/exhaustive-deps
  const commit = () => {
    generate();
    workspace.pushHistory({ tool: "business", toolLabel: "业务数据", count });
  };

  const config = (
    <ConfigStack>
      <Field label="生成数量">
        <NumberField value={count} onValueChange={(v) => setCount(v ?? 1)} min={1} max={300} step={1} />
      </Field>
      <Field label="业务域">
        <Select items={DOMAINS.map((d) => ({ value: d, label: BUSINESS_DOMAIN_LABELS[d] }))} value={domain} onValueChange={(v) => setDomain((v as BusinessDomain) ?? "all")}>
          <SelectTrigger />
          <SelectContent>
            {DOMAINS.map((d) => (
              <SelectItem key={d} value={d}>{BUSINESS_DOMAIN_LABELS[d]}</SelectItem>
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
      name="mock_business"
      summary={`${records.length} 条 · ${BUSINESS_DOMAIN_LABELS[domain]}`}
    />
  );
}
