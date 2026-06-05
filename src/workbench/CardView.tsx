import { Masonry, Card, Stack, Text } from "@hulianui/ui";
import { outputLabel } from "../lib/constants";
import { formatValue, type Row } from "../lib/export";
import { copyText } from "../lib/clipboard";

export function CardView({ records }: { records: Row[] }) {
  return (
    <Masonry
      items={records}
      columns={{ base: 1, sm: 2, lg: 3 }}
      gap={12}
      renderItem={(record, index) => (
        <Card className="p-4">
          <Text as="div" size="xs" tone="muted" weight="medium" className="mb-2">#{index + 1}</Text>
          <Stack as="dl" gap={1.5}>
            {Object.entries(record).map(([key, value]) => (
              <Stack key={key} direction="row" justify="between" align="baseline" gap={3}>
                <Text as="dt" size="xs" tone="muted" className="shrink-0">{outputLabel(key)}</Text>
                <Text
                  as="dd"
                  truncate
                  className="cursor-pointer text-right font-mono text-[13px] hover:text-primary"
                  title={`点击复制 · ${formatValue(value)}`}
                  onClick={() => copyText(formatValue(value), `${outputLabel(key)} 已复制`)}
                >
                  {formatValue(value)}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Card>
      )}
    />
  );
}
