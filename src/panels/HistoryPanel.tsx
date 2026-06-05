import { ExternalLink, Trash2 } from "lucide-react";
import { Card, Button, Tag, Empty, RelativeTime } from "@hulianui/ui";
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
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted">最近 {history.length} 批生成</div>
        <Button size="sm" variant="outline" tone="danger" onClick={() => workspace.clearHistory()}>
          <Trash2 className="size-4" /> 清空
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {history.map((entry) => (
          <Card key={entry.id} className="flex items-center justify-between gap-3 p-3">
            <div className="flex items-center gap-3">
              <Tag size="sm" tone="brand">{entry.toolLabel}</Tag>
              <span className="text-sm text-foreground">生成 {entry.count} 条</span>
              <span className="text-xs text-muted"><RelativeTime value={entry.createdAt} /></span>
            </div>
            <Button size="sm" variant="ghost" onClick={() => requestNavigate(entry.tool)}>
              <ExternalLink className="size-4" /> 打开
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
