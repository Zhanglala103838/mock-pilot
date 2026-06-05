import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { NumberField, Segmented, Field, Input, Card, Button, Stack, Text } from "@hulianui/ui";
import {
  drawMockImage, clampDimension, SHAPE_LABELS, type ImageShape,
} from "../lib/image";
import { ConfigStack } from "../workbench/panel-kit";
import { toast } from "@hulianui/ui";

const SHAPES: ImageShape[] = ["rectangle", "square", "circle"];

export function ImagePanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(450);
  const [shape, setShape] = useState<ImageShape>("rectangle");
  const [label, setLabel] = useState("");

  // 方形/圆形锁定宽高一致。
  const side = shape === "rectangle" ? null : width;
  const w = side ?? width;
  const h = side ?? height;

  useEffect(() => {
    if (canvasRef.current) drawMockImage(canvasRef.current, w, h, label.trim(), shape);
  }, [w, h, label, shape]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) {
        toast({ tone: "danger", title: "图片生成失败" });
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `mock-image-${shape}-${w}x${h}.png`;
      link.click();
      URL.revokeObjectURL(url);
      toast({ tone: "info", title: "PNG 已下载" });
    }, "image/png");
  };

  return (
    <Stack gap={4} className="lg:flex-row lg:items-start">
      <Card className="shrink-0 p-4 lg:sticky lg:top-4 lg:w-72">
        <ConfigStack>
          <Field label="宽度 (px)">
            <NumberField value={width} onValueChange={(v) => setWidth(clampDimension(v ?? 16, 800))} min={16} max={4096} step={10} />
          </Field>
          <Field label="高度 (px)">
            <NumberField value={height} onValueChange={(v) => setHeight(clampDimension(v ?? 16, 450))} min={16} max={4096} step={10} disabled={shape !== "rectangle"} />
          </Field>
          <Field label="形状">
            <Segmented
              aria-label="形状"
              value={shape}
              onValueChange={(v) => setShape(v as ImageShape)}
              items={SHAPES.map((s) => ({ value: s, label: SHAPE_LABELS[s] }))}
            />
          </Field>
          <Field label="占位文字（留空显示尺寸）">
            <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder={`${w} x ${h}`} />
          </Field>
          <Button className="w-full" onClick={download}>
            <Download className="size-4" /> 下载 PNG
          </Button>
        </ConfigStack>
      </Card>

      <Stack gap={0} className="min-w-0 flex-1">
        <Text size="sm" tone="muted" className="mb-3">{w} x {h} · {SHAPE_LABELS[shape]}占位图（Canvas 本地生成，不上传）</Text>
        <Card className="overflow-auto bg-surface-hover p-6">
          <Stack align="center" justify="center">
            <canvas
              ref={canvasRef}
              className="max-w-full rounded-[var(--radius)]"
              style={{ width: "auto", maxHeight: "60vh", aspectRatio: `${w} / ${h}` }}
            />
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
}
