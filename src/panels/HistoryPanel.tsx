import { ExternalLink, Trash2 } from "lucide-react";
import { Card, Button, Tag, Empty, RelativeTime, Stack, Text } from "@hulianui/ui";
import { useHistory, workspace, requestNavigate } from "../store/workspace";

export function HistoryPanel() {
  const history = useHistory();

  if (history.length === 0) {
    return (
      <Empty
        title="还没有历史"
        description="每次点「生成一批」都会在这里留下一条记录，最多保留最近 30 条。"
      />
    );
  }

  return (
    <Stack gap={3}>
      <Stack direction="row" align="center" justify="between">
        <Text size="sm" tone="muted">最近 {history.length} 批生成</Text>
        <Button size="sm" variant="outline" tone="danger" onClick={() => workspace.clearHistory()}>
          <Trash2 className="size-4" /> 清空
        </Button>
      </Stack>
      <Stack gap={2}>
        {history.map((entry) => (
          <Card key={entry.id}>
            <Stack direction="row" align="center" justify="between" gap={3} className="p-3">
              <Stack direction="row" align="center" gap={3}>
                <Tag size="sm" tone="brand">{entry.toolLabel}</Tag>
                <Text as="span" size="sm">生成 {entry.count} 条</Text>
                <Text as="span" size="xs" tone="muted"><RelativeTime value={entry.createdAt} /></Text>
              </Stack>
              <Button size="sm" variant="ghost" onClick={() => requestNavigate(entry.tool)}>
                <ExternalLink className="size-4" /> 打开
              </Button>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
