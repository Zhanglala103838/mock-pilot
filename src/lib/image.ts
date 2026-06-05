// 占位图：Canvas 本地绘制骨架屏风格 PNG。移植自旧 app.js。
export type ImageShape = "rectangle" | "square" | "circle";

export const IMAGE_MIN_SIZE = 16;
export const IMAGE_MAX_SIZE = 4096;

export const SHAPE_LABELS: Record<ImageShape, string> = {
  rectangle: "矩形",
  square: "方形",
  circle: "圆形",
};

export function clampDimension(value: number, fallback: number): number {
  return Number.isFinite(value)
    ? Math.min(Math.max(Math.round(value), IMAGE_MIN_SIZE), IMAGE_MAX_SIZE)
    : fallback;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  const safe = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + safe, y);
  ctx.lineTo(x + w - safe, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + safe);
  ctx.lineTo(x + w, y + h - safe);
  ctx.quadraticCurveTo(x + w, y + h, x + w - safe, y + h);
  ctx.lineTo(x + safe, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - safe);
  ctx.lineTo(x, y + safe);
  ctx.quadraticCurveTo(x, y, x + safe, y);
  ctx.closePath();
}

function drawSkeletonPattern(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  const unit = Math.max(8, Math.min(width, height) * 0.035);
  const margin = unit * 2.2;
  const radius = Math.max(4, unit * 0.55);
  const topHeight = Math.max(unit * 2.2, height * 0.14);
  const blockColor = "rgba(210, 217, 226, 0.92)";
  const softBlockColor = "rgba(226, 231, 237, 0.95)";

  ctx.fillStyle = "#f7f9fb";
  roundRect(ctx, margin, margin, Math.max(unit * 3, width - margin * 2), topHeight, radius);
  ctx.fill();

  ctx.fillStyle = blockColor;
  roundRect(ctx, margin * 1.45, margin * 1.55, topHeight * 0.48, topHeight * 0.48, topHeight * 0.24);
  ctx.fill();

  ctx.fillStyle = softBlockColor;
  roundRect(ctx, margin * 1.45 + topHeight * 0.68, margin * 1.65, Math.max(unit * 6, width * 0.28), unit * 0.9, radius);
  ctx.fill();
  roundRect(ctx, margin * 1.45 + topHeight * 0.68, margin * 2.25, Math.max(unit * 5, width * 0.18), unit * 0.72, radius);
  ctx.fill();

  const cardTop = margin * 2 + topHeight;
  const availableWidth = width - margin * 2;
  const gap = unit;
  const columns = width >= 720 ? 3 : width >= 420 ? 2 : 1;
  const cardWidth = (availableWidth - gap * (columns - 1)) / columns;
  const cardHeight = Math.max(unit * 5.2, (height - cardTop - margin) * 0.38);

  for (let index = 0; index < columns; index += 1) {
    const x = margin + index * (cardWidth + gap);
    const y = cardTop;
    ctx.fillStyle = "#f8fafc";
    roundRect(ctx, x, y, cardWidth, cardHeight, radius);
    ctx.fill();
    ctx.fillStyle = blockColor;
    roundRect(ctx, x + unit, y + unit, cardWidth - unit * 2, Math.max(unit * 1.7, cardHeight * 0.32), radius);
    ctx.fill();
    ctx.fillStyle = softBlockColor;
    roundRect(ctx, x + unit, y + cardHeight * 0.52, cardWidth * 0.68, unit * 0.75, radius);
    ctx.fill();
    roundRect(ctx, x + unit, y + cardHeight * 0.66, cardWidth * 0.48, unit * 0.65, radius);
    ctx.fill();
  }

  const bandY = Math.min(height - margin - unit * 2, cardTop + cardHeight + unit * 1.6);
  ctx.fillStyle = "rgba(245, 247, 250, 0.82)";
  roundRect(ctx, margin, bandY, availableWidth, Math.max(unit * 2, height * 0.08), radius);
  ctx.fill();
}

function drawImageLabel(ctx: CanvasRenderingContext2D, width: number, height: number, label: string): void {
  const shortSide = Math.min(width, height);
  const maxTextWidth = width * 0.78;
  const displayLabel = shortSide < 64 ? label.replaceAll(" ", "") : label;
  let fontSize = Math.min(Math.max(Math.floor(shortSide * 0.13), 4), 96);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `850 ${fontSize}px PingFang SC, Microsoft YaHei UI, sans-serif`;
  while (ctx.measureText(displayLabel).width > maxTextWidth && fontSize > 4) {
    fontSize -= 1;
    ctx.font = `850 ${fontSize}px PingFang SC, Microsoft YaHei UI, sans-serif`;
  }

  const paddingX = Math.max(2, fontSize * 0.8);
  const labelWidth = Math.min(width * 0.92, ctx.measureText(displayLabel).width + paddingX * 2);
  const labelHeight = Math.min(height * 0.82, fontSize * 1.72);
  const labelX = (width - labelWidth) / 2;
  const labelY = (height - labelHeight) / 2;

  ctx.fillStyle = "rgba(248, 250, 252, 0.86)";
  roundRect(ctx, labelX, labelY, labelWidth, labelHeight, Math.max(6, fontSize * 0.22));
  ctx.fill();
  ctx.fillStyle = "#66717f";
  ctx.fillText(displayLabel, width / 2, height / 2 + fontSize * 0.02, width * 0.84);
}

function drawSurface(ctx: CanvasRenderingContext2D, width: number, height: number, label: string): void {
  ctx.fillStyle = "#eef1f4";
  ctx.fillRect(0, 0, width, height);
  if (width >= 96 && height >= 96) drawSkeletonPattern(ctx, width, height);
  drawImageLabel(ctx, width, height, label);
}

export function drawMockImage(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  label: string,
  shape: ImageShape,
): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);

  const text = label || `${width} x ${height}`;
  if (shape === "circle") {
    const radius = Math.min(width, height) / 2;
    const cx = width / 2;
    const cy = height / 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();
    drawSurface(ctx, width, height, text);
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(0, radius - 0.5), 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(183, 193, 205, 0.9)";
    ctx.lineWidth = Math.max(1, Math.min(width, height) * 0.006);
    ctx.stroke();
    ctx.restore();
  } else {
    drawSurface(ctx, width, height, text);
  }
}
