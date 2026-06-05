import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import {
  NumberField, Select, SelectTrigger, SelectContent, SelectItem, Field, Input,
  Card, JsonViewer, Button, Tag,
} from "@hulianui/ui";
import { Random } from "../lib/random";
import {
  createApiResponse, API_STATUS_LABELS, API_STATUS_CONFIG,
  type ApiStatusKey, type ApiMethod,
} from "../lib/generators/api";
import { ConfigStack } from "../workbench/panel-kit";
import { copyText, downloadTextFile } from "../lib/clipboard";

const rnd = new Random();
const METHODS: ApiMethod[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];
const STATUSES = Object.keys(API_STATUS_LABELS) as ApiStatusKey[];

export function ApiPanel() {
  const [method, setMethod] = useState<ApiMethod>("GET");
  const [status, setStatus] = useState<ApiStatusKey>("success");
  const [endpoint, setEndpoint] = useState("/api/mock/items");
  const [pageSize, setPageSize] = useState(5);
  const [response, setResponse] = useState<Record<string, unknown>>({});

  const generate = () => setResponse(createApiResponse(rnd, { method, status, endpoint, pageSize }));
  useEffect(generate, [method, status, endpoint, pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

  const httpStatus = API_STATUS_CONFIG[status].httpStatus;
  const json = JSON.stringify(response, null, 2);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
      <Card className="shrink-0 p-4 lg:sticky lg:top-4 lg:w-72">
        <ConfigStack>
          <Field label="请求方法">
            <Select items={METHODS.map((m) => ({ value: m, label: m }))} value={method} onValueChange={(v) => setMethod((v as ApiMethod) ?? "GET")}>
              <SelectTrigger />
              <SelectContent>
                {METHODS.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
              </SelectContent>
            </Select>
          </Field>
          <Field label="响应状态">
            <Select items={STATUSES.map((s) => ({ value: s, label: API_STATUS_LABELS[s] }))} value={status} onValueChange={(v) => setStatus((v as ApiStatusKey) ?? "success")}>
              <SelectTrigger />
              <SelectContent>
                {STATUSES.map((s) => <SelectItem key={s} value={s}>{API_STATUS_LABELS[s]}</SelectItem>)}
              </SelectContent>
            </Select>
          </Field>
          <Field label="接口路径">
            <Input value={endpoint} onChange={(e) => setEndpoint(e.target.value)} placeholder="/api/mock/items" />
          </Field>
          <Field label="列表条数（仅成功态）">
            <NumberField value={pageSize} onValueChange={(v) => setPageSize(v ?? 0)} min={0} max={100} step={1} />
          </Field>
        </ConfigStack>
      </Card>

      <div className="min-w-0 flex-1">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Tag tone={httpStatus < 400 ? "success" : "danger"} dot>{httpStatus}</Tag>
            <span className="font-mono">{method} {endpoint}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => copyText(json, "接口 JSON 已复制")}>复制 JSON</Button>
            <Button size="sm" onClick={() => downloadTextFile(json, `mock-api-${Date.now()}.json`, "application/json;charset=utf-8")}>
              <Download className="size-4" /> 下载
            </Button>
          </div>
        </div>
        <Card className="overflow-auto p-4">
          <JsonViewer data={response} rootName="response" defaultExpandedDepth={3} />
        </Card>
      </div>
    </div>
  );
}
