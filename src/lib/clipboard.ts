import { toast } from "@hulianui/ui";

export async function copyText(text: string, successMessage = "已复制到剪贴板"): Promise<void> {
  if (!text || text === "[]") {
    toast({ tone: "neutral", title: "当前没有可复制的数据" });
    return;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    toast({ tone: "info", title: successMessage });
  } catch {
    fallbackCopy(text);
    toast({ tone: "info", title: successMessage });
  }
}

function fallbackCopy(text: string): void {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export function downloadTextFile(content: string, filename: string, type: string): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
