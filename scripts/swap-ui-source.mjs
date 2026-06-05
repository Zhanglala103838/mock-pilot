#!/usr/bin/env node
// 在「本地软链」与「registry pin 版本」之间切换 @hulianui/* 依赖来源。
//   node scripts/swap-ui-source.mjs local      → link:../hulian/packages/*
//   node scripts/swap-ui-source.mjs registry   → ^x.y.z（从 GitHub Packages 安装，需 NODE_AUTH_TOKEN）
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { execSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkgPath = join(root, "package.json");
const mode = process.argv[2];

if (mode !== "local" && mode !== "registry") {
  console.error("用法: swap-ui-source.mjs <local|registry>");
  process.exit(1);
}

const localSpecs = {
  "@hulianui/ui": "link:../hulian/packages/ui",
  "@hulianui/tokens": "link:../hulian/packages/tokens",
};

function readPublishedVersion(pkgName) {
  const dir = pkgName.split("/")[1];
  const p = join(root, "..", "hulian", "packages", dir, "package.json");
  return `^${JSON.parse(readFileSync(p, "utf8")).version}`;
}

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
for (const name of Object.keys(localSpecs)) {
  pkg.dependencies[name] = mode === "local" ? localSpecs[name] : readPublishedVersion(name);
}
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log(`已切换 @hulianui/* → ${mode}`);

try {
  execSync("pnpm install", { cwd: root, stdio: "inherit" });
} catch {
  console.error("pnpm install 失败（registry 模式需 NODE_AUTH_TOKEN 鉴权 GitHub Packages）");
  process.exit(1);
}
