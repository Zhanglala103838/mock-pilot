import { Trash2, Wand2 } from "lucide-react";
import { Card, Button, Tag, Empty, RelativeTime } from "@hulianui/ui";
import { useTemplates, workspace, requestApplyTemplate, requestNavigate } from "../store/workspace";
import { outputLabel } from "../lib/constants";

export function TemplatesPanel() {
  const templates = useTemplates();

  if (templates.length === 0) {
    return (
      <Empty
        title="还没有模板"
        description="在「个人档案」配置好字段与策略后，点「存为模板」即可保存到这里。"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((tpl) => (
        <Card key={tpl.id} className="flex flex-col gap-3 p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="truncate font-medium text-foreground">{tpl.name}</div>
              <div className="text-xs text-muted">
                <RelativeTime value={tpl.createdAt} /> · {tpl.config.count} 条
              </div>
            </div>
            <Tag size="sm" tone={tpl.config.genderMode === "random" ? "neutral" : "brand"}>
              {tpl.config.genderMode === "random" ? "随机性别" : tpl.config.genderMode}
            </Tag>
          </div>
          <div className="flex flex-wrap gap-1">
            {tpl.config.fields.map((f) => (
              <Tag key={f} size="sm" variant="soft">{outputLabel(f)}</Tag>
            ))}
          </div>
          <div className="mt-auto flex gap-2">
            <Button
              size="sm"
              className="flex-1"
              onClick={() => {
                requestApplyTemplate(tpl.config);
                requestNavigate("personal");
              }}
            >
              <Wand2 className="size-4" /> 应用
            </Button>
            <Button size="sm" variant="outline" tone="danger" onClick={() => workspace.deleteTemplate(tpl.id)}>
              <Trash2 className="size-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
