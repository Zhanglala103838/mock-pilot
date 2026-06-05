import { Copy } from "lucide-react";
import { Button, Stack, Text } from "@hulianui/ui";
import { copyText } from "../lib/clipboard";
import { formatValue } from "../lib/export";

export function CopyCell({ value, label }: { value: unknown; label: string }) {
  const text = formatValue(value);
  return (
    <Stack direction="row" align="center" gap={1} inline className="group/cell max-w-full">
      <Text as="span" truncate className="font-mono text-[13px]" title={text}>
        {text}
      </Text>
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
    </Stack>
  );
}
