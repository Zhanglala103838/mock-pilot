import { useEffect, useState } from "react";
import { NumberField, Select, SelectTrigger, SelectContent, SelectItem, Field } from "@hulianui/ui";
import { Random } from "../lib/random";
import { createAccountRecords, ACCOUNT_ROLE_LABELS, type AccountRoleMode } from "../lib/generators/account";
import { RecordWorkbench } from "../workbench/RecordWorkbench";
import { RegenerateButton, ConfigStack } from "../workbench/panel-kit";
import type { Row } from "../lib/export";
import { workspace } from "../store/workspace";

const rnd = new Random();
const MODES = Object.keys(ACCOUNT_ROLE_LABELS) as AccountRoleMode[];

export function AccountPanel() {
  const [count, setCount] = useState(20);
  const [mode, setMode] = useState<AccountRoleMode>("random");
  const [records, setRecords] = useState<Row[]>([]);

  const generate = () => setRecords(createAccountRecords(rnd, count, mode) as unknown as Row[]);
  useEffect(generate, [count, mode]); // eslint-disable-line react-hooks/exhaustive-deps
  const commit = () => {
    generate();
    workspace.pushHistory({ tool: "account", toolLabel: "账号权限", count });
  };

  const config = (
    <ConfigStack>
      <Field label="生成数量">
        <NumberField value={count} onValueChange={(v) => setCount(v ?? 1)} min={1} max={300} step={1} />
      </Field>
      <Field label="角色策略">
        <Select items={MODES.map((m) => ({ value: m, label: ACCOUNT_ROLE_LABELS[m] }))} value={mode} onValueChange={(v) => setMode((v as AccountRoleMode) ?? "random")}>
          <SelectTrigger />
          <SelectContent>
            {MODES.map((m) => (
              <SelectItem key={m} value={m}>{ACCOUNT_ROLE_LABELS[m]}</SelectItem>
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
      name="mock_accounts"
      summary={`${records.length} 条 · ${ACCOUNT_ROLE_LABELS[mode]}`}
    />
  );
}
