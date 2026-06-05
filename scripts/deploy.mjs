#!/usr/bin/env node
// 构建静态站并 rsync 到生产 nginx。
//   目标：60.205.112.50:/www/wwwroot/https:/mock.haloritual.com
// 用法：node scripts/deploy.mjs [--build-only]
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SERVER = "60.205.112.50";
// nginx 站点根（注意目录名字面含 https:）。
const REMOTE_DIR = "/www/wwwroot/https:/mock.haloritual.com";
const buildOnly = process.argv.includes("--build-only");

function run(cmd) {
  console.log(`$ ${cmd}`);
  execSync(cmd, { cwd: root, stdio: "inherit" });
}

run("pnpm build");

if (buildOnly) {
  console.log("仅构建完成，dist/ 已就绪。");
  process.exit(0);
}

// 尾部斜杠：同步 dist 内容到远端目录。--delete 清理远端陈旧文件。
run(
  `rsync -avz --delete -e ssh "${join(root, "dist")}/" ` +
    `"root@${SERVER}:${REMOTE_DIR.replace(/ /g, "\\ ")}/"`,
);
console.log("部署完成 → https://mock.haloritual.com");
