import type { ReactNode } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@hulianui/ui";

/** 配置区里的一个带标题小节。 */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-medium text-muted">{title}</div>
      {children}
    </div>
  );
}

/** 配置区底部的「生成」主操作。 */
export function RegenerateButton({ onClick, children = "生成一批" }: { onClick: () => void; children?: ReactNode }) {
  return (
    <Button className="w-full" onClick={onClick}>
      <RefreshCw className="size-4" /> {children}
    </Button>
  );
}

/** 配置区竖直排布容器。 */
export function ConfigStack({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
