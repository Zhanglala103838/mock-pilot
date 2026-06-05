import { useSyncExternalStore } from "react";

// 工作台持久态：个人档案模板库 + 生成历史。localStorage 持久化的极简外部 store。

export interface PersonalConfig {
  fields: string[];
  count: number;
  genderMode: "random" | "男" | "女";
  range: [string, string];
  testSuffix: boolean;
}

export interface Template {
  id: string;
  name: string;
  createdAt: number;
  config: PersonalConfig;
}

export interface HistoryEntry {
  id: string;
  tool: string;
  toolLabel: string;
  count: number;
  createdAt: number;
}

interface WorkspaceState {
  templates: Template[];
  history: HistoryEntry[];
}

const KEY = "mock-pilot-workspace";
const HISTORY_CAP = 30;

function load(): WorkspaceState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<WorkspaceState>;
      return { templates: parsed.templates ?? [], history: parsed.history ?? [] };
    }
  } catch {
    /* ignore */
  }
  return { templates: [], history: [] };
}

let state: WorkspaceState = load();
const listeners = new Set<() => void>();

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore quota */
  }
}

function emit() {
  persist();
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// 自增计数器代替 Date.now()/random（环境禁用），保证 id 唯一。
let seq = 0;
function uid(): string {
  seq += 1;
  return `${state.templates.length + state.history.length}-${seq}-${performance.now().toFixed(3)}`;
}

export const workspace = {
  getState: () => state,

  saveTemplate(name: string, config: PersonalConfig) {
    const tpl: Template = { id: uid(), name, createdAt: Date.now(), config };
    state = { ...state, templates: [tpl, ...state.templates] };
    emit();
  },

  deleteTemplate(id: string) {
    state = { ...state, templates: state.templates.filter((t) => t.id !== id) };
    emit();
  },

  pushHistory(entry: Omit<HistoryEntry, "id" | "createdAt">) {
    const item: HistoryEntry = { ...entry, id: uid(), createdAt: Date.now() };
    state = { ...state, history: [item, ...state.history].slice(0, HISTORY_CAP) };
    emit();
  },

  clearHistory() {
    state = { ...state, history: [] };
    emit();
  },
};

// —— 跨面板「应用模板」协调 ——
type ApplyListener = (config: PersonalConfig) => void;
const applyListeners = new Set<ApplyListener>();

export function requestApplyTemplate(config: PersonalConfig) {
  applyListeners.forEach((l) => l(config));
}

export function onApplyTemplate(listener: ApplyListener): () => void {
  applyListeners.add(listener);
  return () => applyListeners.delete(listener);
}

// —— 跨面板导航（请求切换到某工具页） ——
type NavListener = (tool: string) => void;
const navListeners = new Set<NavListener>();

export function requestNavigate(tool: string) {
  navListeners.forEach((l) => l(tool));
}

export function onNavigate(listener: NavListener): () => void {
  navListeners.add(listener);
  return () => navListeners.delete(listener);
}

// —— React hooks ——
export function useTemplates(): Template[] {
  return useSyncExternalStore(subscribe, () => state.templates);
}

export function useHistory(): HistoryEntry[] {
  return useSyncExternalStore(subscribe, () => state.history);
}
