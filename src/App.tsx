import { useCallback, useEffect, useState } from "react";
import {
  AdminLayout, ThemeProvider, ToastProvider, AnimatedThemeToggler, TooltipProvider, Empty,
} from "@hulianui/ui";
import type { NavMenuNode } from "@hulianui/ui";
import { TOOLS, TOOL_KEYS, DEFAULT_TOOL, toolLabel } from "./app/tools";
import { onNavigate } from "./store/workspace";
import { PersonalPanel } from "./panels/PersonalPanel";
import { AccountPanel } from "./panels/AccountPanel";
import { BusinessPanel } from "./panels/BusinessPanel";
import { GeneralPanel } from "./panels/GeneralPanel";
import { UuidPanel } from "./panels/UuidPanel";
import { ImagePanel } from "./panels/ImagePanel";
import { ApiPanel } from "./panels/ApiPanel";
import { TemplatesPanel } from "./panels/TemplatesPanel";
import { HistoryPanel } from "./panels/HistoryPanel";

const GROUP_LABELS: Record<string, string> = {
  generator: "数据生成器",
  asset: "资产工具",
  workspace: "工作区",
};

const MENU: NavMenuNode[] = (["generator", "asset", "workspace"] as const).map((group) => ({
  type: "group",
  key: `g-${group}`,
  label: GROUP_LABELS[group],
  children: TOOLS.filter((t) => t.group === group).map((t) => ({
    key: t.key,
    label: t.label,
    icon: t.icon,
  })),
}));

const PANELS: Record<string, () => React.ReactElement> = {
  personal: PersonalPanel,
  account: AccountPanel,
  business: BusinessPanel,
  general: GeneralPanel,
  uuid: UuidPanel,
  image: ImagePanel,
  api: ApiPanel,
  templates: TemplatesPanel,
  history: HistoryPanel,
};

function initialTool(): string {
  const param = new URLSearchParams(window.location.search).get("tool");
  return param && TOOL_KEYS.includes(param) ? param : DEFAULT_TOOL;
}

export function App() {
  const [active, setActive] = useState(initialTool);

  const onActivate = useCallback((key: string) => {
    setActive(key);
    const url = new URL(window.location.href);
    url.searchParams.set("tool", key);
    window.history.replaceState(null, "", url);
  }, []);

  // 跨面板导航（模板「应用」/历史「打开」请求切换工具页）。
  useEffect(() => onNavigate(onActivate), [onActivate]);

  return (
    <ThemeProvider>
      <TooltipProvider delay={300} closeDelay={0}>
        <AdminLayout
          menuItems={MENU}
          logo={<span className="text-base font-bold text-primary">Mock Pilot</span>}
          logoCollapsed={<span className="text-base font-bold text-primary">M</span>}
          defaultActiveKey={active}
          activeKey={active}
          selectedKey={active}
          onMenuSelect={onActivate}
          onTabChange={onActivate}
          breadcrumb={<span className="text-sm text-muted">Mock 工作台 / {toolLabel(active)}</span>}
          headerExtra={<AnimatedThemeToggler />}
        >
          {/* keep-alive：全部面板常驻，仅切换可见，保留各自已生成的数据 */}
          {TOOL_KEYS.map((key) => {
            const Panel = PANELS[key];
            return (
              <div key={key} hidden={key !== active} className={key === active ? "" : "hidden"}>
                {Panel ? <Panel /> : <Empty title="建设中" />}
              </div>
            );
          })}
        </AdminLayout>
      </TooltipProvider>
      <ToastProvider />
    </ThemeProvider>
  );
}
