import { useCallback, useEffect, useMemo, useState } from "react";
import { BookmarkPlus } from "lucide-react";
import {
  CheckboxGroup, Checkbox, NumberField, Select, SelectTrigger, SelectContent, SelectItem,
  Switch, DateRangePicker, Field, Button, Dialog, DialogContent, DialogClose, Input, toast,
} from "@hulianui/ui";
import { Random } from "../lib/random";
import { createProfiles, PERSONAL_FIELDS, type Gender } from "../lib/generators/personal";
import { normalizeDateRange } from "../lib/datetime";
import { outputLabel } from "../lib/constants";
import { RecordWorkbench } from "../workbench/RecordWorkbench";
import { Section, RegenerateButton, ConfigStack } from "../workbench/panel-kit";
import type { Row } from "../lib/export";
import { workspace, onApplyTemplate, type PersonalConfig } from "../store/workspace";

const PRESETS: Record<string, string[]> = {
  core: ["name", "gender", "phone", "idNumber"],
  full: PERSONAL_FIELDS.map((f) => f.key),
};

const rnd = new Random();

export function PersonalPanel() {
  const [selected, setSelected] = useState<string[]>(PRESETS.core);
  const [count, setCount] = useState(10);
  const [genderMode, setGenderMode] = useState<"random" | Gender>("random");
  const [range, setRange] = useState<[string, string]>(["1980-01-01", "2005-12-31"]);
  const [testSuffix, setTestSuffix] = useState(false);
  const [records, setRecords] = useState<Row[]>([]);
  const [saveOpen, setSaveOpen] = useState(false);
  const [tplName, setTplName] = useState("");

  const orderedFields = useMemo(
    () => PERSONAL_FIELDS.map((f) => f.key).filter((k) => selected.includes(k)),
    [selected],
  );

  const build = useCallback((): Row[] => {
    if (orderedFields.length === 0) return [];
    const dateRange = normalizeDateRange(range[0], range[1]);
    return createProfiles(rnd, count, orderedFields, { genderMode, range: dateRange, testSuffix });
  }, [orderedFields, count, range, genderMode, testSuffix]);

  // 配置变化自动重生成（静默，不记历史）。
  useEffect(() => setRecords(build()), [build]);

  // 显式「生成一批」记入历史。
  const commit = () => {
    const next = build();
    setRecords(next);
    if (next.length > 0) workspace.pushHistory({ tool: "personal", toolLabel: "个人档案", count: next.length });
  };

  // 接收模板「应用」。
  useEffect(
    () =>
      onApplyTemplate((cfg: PersonalConfig) => {
        setSelected(cfg.fields);
        setCount(cfg.count);
        setGenderMode(cfg.genderMode);
        setRange(cfg.range);
        setTestSuffix(cfg.testSuffix);
        toast({ tone: "info", title: "已应用模板" });
      }),
    [],
  );

  const saveTemplate = () => {
    const name = tplName.trim();
    if (!name) {
      toast({ tone: "danger", title: "请填写模板名" });
      return;
    }
    const config: PersonalConfig = { fields: orderedFields, count, genderMode, range, testSuffix };
    workspace.saveTemplate(name, config);
    toast({ tone: "info", title: `模板「${name}」已保存` });
    setTplName("");
    setSaveOpen(false);
  };

  const config = (
    <ConfigStack>
      <Section title="字段清单">
        <div className="mb-1 flex flex-wrap gap-1.5">
          <Button variant="ghost" size="sm" onClick={() => setSelected(PRESETS.core)}>常用四项</Button>
          <Button variant="ghost" size="sm" onClick={() => setSelected(PRESETS.full)}>全量</Button>
          <Button variant="ghost" size="sm" onClick={() => setSelected([])}>清空</Button>
        </div>
        <CheckboxGroup value={selected} onValueChange={setSelected} className="grid grid-cols-2 gap-x-2 gap-y-1.5">
          {PERSONAL_FIELDS.map((f) => (
            <Checkbox key={f.key} value={f.key} label={f.label} />
          ))}
        </CheckboxGroup>
      </Section>

      <Field label="生成数量">
        <NumberField value={count} onValueChange={(v) => setCount(v ?? 1)} min={1} max={200} step={1} />
      </Field>

      <Field label="性别策略">
        <Select
          items={[
            { value: "random", label: "随机" },
            { value: "男", label: "男" },
            { value: "女", label: "女" },
          ]}
          value={genderMode}
          onValueChange={(v) => setGenderMode((v as "random" | Gender) ?? "random")}
        >
          <SelectTrigger />
          <SelectContent>
            <SelectItem value="random">随机</SelectItem>
            <SelectItem value="男">男</SelectItem>
            <SelectItem value="女">女</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Section title="出生日期范围">
        <DateRangePicker value={range} onValueChange={(v) => v && setRange(v)} minDate="1950-01-01" maxDate="2025-12-31" />
      </Section>

      <label className="flex items-center justify-between text-sm text-foreground">
        <span>姓名追加 (测)</span>
        <Switch checked={testSuffix} onCheckedChange={setTestSuffix} />
      </label>

      <RegenerateButton onClick={commit} />

      <Button variant="outline" className="w-full" onClick={() => setSaveOpen(true)}>
        <BookmarkPlus className="size-4" /> 存为模板
      </Button>

      <Dialog open={saveOpen} onOpenChange={setSaveOpen}>
        <DialogContent
          title="保存为模板"
          description="保存当前字段清单与生成配置，下次一键恢复。"
          footer={
            <>
              <DialogClose render={<Button variant="ghost">取消</Button>} />
              <Button onClick={saveTemplate}>保存</Button>
            </>
          }
        >
          <Field label="模板名称">
            <Input value={tplName} onChange={(e) => setTplName(e.target.value)} placeholder="如：核心四项 · 仅男性" autoFocus />
          </Field>
        </DialogContent>
      </Dialog>
    </ConfigStack>
  );

  return (
    <RecordWorkbench
      config={config}
      records={records}
      name="mock_users"
      summary={
        orderedFields.length === 0
          ? "未选择字段"
          : `${records.length} 条 · 字段：${orderedFields.map(outputLabel).join("、")}`
      }
      emptyHint="请至少勾选一个字段。"
    />
  );
}
