import { useEffect, useState } from "react";
import { NumberField, Switch, Field, Stack, Text } from "@hulianui/ui";
import { Random } from "../lib/random";
import { createUuids, uuidFormatLabel } from "../lib/generators/uuid";
import { RecordWorkbench } from "../workbench/RecordWorkbench";
import { RegenerateButton, ConfigStack } from "../workbench/panel-kit";
import type { Row } from "../lib/export";
import { workspace } from "../store/workspace";

const rnd = new Random();

export function UuidPanel() {
  const [count, setCount] = useState(20);
  const [uppercase, setUppercase] = useState(false);
  const [compact, setCompact] = useState(false);
  const [records, setRecords] = useState<Row[]>([]);

  const generate = () => setRecords(createUuids(rnd, count, { uppercase, compact }) as unknown as Row[]);
  useEffect(generate, [count, uppercase, compact]); // eslint-disable-line react-hooks/exhaustive-deps
  const commit = () => {
    generate();
    workspace.pushHistory({ tool: "uuid", toolLabel: "UUID", count });
  };

  const config = (
    <ConfigStack>
      <Field label="生成数量">
        <NumberField value={count} onValueChange={(v) => setCount(v ?? 1)} min={1} max={500} step={1} />
      </Field>
      <Stack as="label" direction="row" align="center" justify="between">
        <Text as="span" size="sm">大写</Text>
        <Switch checked={uppercase} onCheckedChange={setUppercase} />
      </Stack>
      <Stack as="label" direction="row" align="center" justify="between">
        <Text as="span" size="sm">32 位无连字符</Text>
        <Switch checked={compact} onCheckedChange={setCompact} />
      </Stack>
      <RegenerateButton onClick={commit} />
    </ConfigStack>
  );

  return (
    <RecordWorkbench
      config={config}
      records={records}
      name="mock_uuids"
      summary={`${records.length} 个 · ${uuidFormatLabel({ uppercase, compact })}`}
    />
  );
}
