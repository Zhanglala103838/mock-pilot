import { Masonry, Card } from "@hulianui/ui";
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
          <div className="mb-2 text-xs font-medium text-muted">#{index + 1}</div>
          <dl className="flex flex-col gap-1.5">
            {Object.entries(record).map(([key, value]) => (
              <div key={key} className="flex items-baseline justify-between gap-3">
                <dt className="shrink-0 text-xs text-muted">{outputLabel(key)}</dt>
                <dd
                  className="cursor-pointer truncate text-right font-mono text-[13px] text-foreground hover:text-primary"
                  title={`点击复制 · ${formatValue(value)}`}
                  onClick={() => copyText(formatValue(value), `${outputLabel(key)} 已复制`)}
                >
                  {formatValue(value)}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      )}
    />
  );
}
