import { Copy } from "lucide-react";
import { Button } from "@hulianui/ui";
import { copyText } from "../lib/clipboard";
import { formatValue } from "../lib/export";

export function CopyCell({ value, label }: { value: unknown; label: string }) {
  const text = formatValue(value);
  return (
    <span className="group/cell inline-flex max-w-full items-center gap-1">
      <span className="truncate font-mono text-[13px] text-foreground" title={text}>
        {text}
      </span>
      <Button
        variant="ghost"
        size="iconSm"
        aria-label={`复制${label}`}
        title={`复制${label}`}
        onClick={() => copyText(text, `${label} 已复制`)}
        className="shrink-0 opacity-0 transition-opacity focus-visible:opacity-100 group-hover/cell:opacity-100"
      >
        <Copy className="size-3.5" />
      </Button>
    </span>
  );
}
