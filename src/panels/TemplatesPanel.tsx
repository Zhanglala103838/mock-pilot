import { Trash2, Wand2 } from "lucide-react";
import { Card, Button, Tag, Empty, RelativeTime, Grid, Stack, Text } from "@hulianui/ui";
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
    <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={3}>
      {templates.map((tpl) => (
        <Card key={tpl.id}>
          <Stack gap={3} className="p-4">
            <Stack direction="row" align="start" justify="between" gap={2}>
              <Stack gap={0} className="min-w-0">
                <Text as="div" weight="medium" truncate>{tpl.name}</Text>
                <Text as="div" size="xs" tone="muted">
                  <RelativeTime value={tpl.createdAt} /> · {tpl.config.count} 条
                </Text>
              </Stack>
              <Tag size="sm" tone={tpl.config.genderMode === "random" ? "neutral" : "brand"}>
                {tpl.config.genderMode === "random" ? "随机性别" : tpl.config.genderMode}
              </Tag>
            </Stack>
            <Stack direction="row" wrap gap={1}>
              {tpl.config.fields.map((f) => (
                <Tag key={f} size="sm" variant="soft">{outputLabel(f)}</Tag>
              ))}
            </Stack>
            <Stack direction="row" gap={2} className="mt-auto">
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
            </Stack>
          </Stack>
        </Card>
      ))}
    </Grid>
  );
}
