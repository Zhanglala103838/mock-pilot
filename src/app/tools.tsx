import type { ReactNode } from "react";
import { User, KeyRound, Package, Braces, Hash, Image, Server, BookMarked, History } from "lucide-react";

export interface ToolDef {
  key: string;
  label: string;
  icon: ReactNode;
  group: "generator" | "asset" | "workspace";
}

export const TOOLS: ToolDef[] = [
  { key: "personal", label: "个人档案", icon: <User className="size-4" />, group: "generator" },
  { key: "account", label: "账号权限", icon: <KeyRound className="size-4" />, group: "generator" },
  { key: "business", label: "业务数据", icon: <Package className="size-4" />, group: "generator" },
  { key: "general", label: "通用字段", icon: <Braces className="size-4" />, group: "generator" },
  { key: "uuid", label: "UUID", icon: <Hash className="size-4" />, group: "generator" },
  { key: "image", label: "占位图", icon: <Image className="size-4" />, group: "asset" },
  { key: "api", label: "接口响应", icon: <Server className="size-4" />, group: "asset" },
  { key: "templates", label: "模板库", icon: <BookMarked className="size-4" />, group: "workspace" },
  { key: "history", label: "历史记录", icon: <History className="size-4" />, group: "workspace" },
];

export const TOOL_KEYS = TOOLS.map((t) => t.key);
export const DEFAULT_TOOL = "personal";

export function toolLabel(key: string): string {
  return TOOLS.find((t) => t.key === key)?.label ?? key;
}
