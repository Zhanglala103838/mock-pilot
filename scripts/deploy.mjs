#!/usr/bin/env node
// 构建静态站并 rsync 到生产 nginx。
//   目标：60.205.112.50:/www/wwwroot/mock.haloritual.com  ← nginx 实际 root（vhost mock.haloritual.com.conf）
//   注：旧脚本曾写到 /www/wwwroot/https:/mock.haloritual.com，那是个 nginx 根本不服务的野路径，已纠正。
//   凭据：~/Desktop/60.205.112.50（git 外，三行：IP / 用户 / 密码），用 sshpass 注入（服务器仅开密码认证）。
//   覆盖凭据路径：HULIAN_DEPLOY_CRED=/path/to/cred node scripts/deploy.mjs
// 用法：node scripts/deploy.mjs [--build-only]
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const REMOTE_DIR = "/www/wwwroot/mock.haloritual.com";
const CRED = process.env.HULIAN_DEPLOY_CRED || join(homedir(), "Desktop", "60.205.112.50");
const buildOnly = process.argv.includes("--build-only");

function run(cmd) {
  // 打印时隐去明文密码
  console.log(`$ ${cmd.replace(/sshpass -p '[^']*'/g, "sshpass -p '***'")}`);
  execSync(cmd, { cwd: root, stdio: "inherit" });
}

run("pnpm build");

if (buildOnly) {
  console.log("仅构建完成，dist/ 已就绪。");
  process.exit(0);
}

if (!existsSync(CRED)) {
  console.error(`✗ 找不到凭据文件 ${CRED}（三行：IP / 用户 / 密码）`);
  process.exit(1);
}
const [HOST, USER, PASS] = readFileSync(CRED, "utf8")
  .split(/\r?\n/)
  .map((s) => s.trim());
if (!HOST || !USER || !PASS) {
  console.error("✗ 凭据文件格式不对（需三行：IP / 用户 / 密码）");
  process.exit(1);
}

const SSH = `ssh -o StrictHostKeyChecking=accept-new`;

// 1. 确保远端目录存在
run(`sshpass -p '${PASS}' ${SSH} ${USER}@${HOST} "mkdir -p ${REMOTE_DIR}"`);

// 2. rsync 同步 dist/ 内容到远端目录。
//    --delete 让远端与 dist/ 完全一致（纯静态，安全）；--exclude 保护宝塔 .user.ini（chattr +i，删不掉会报错）。
run(
  `sshpass -p '${PASS}' rsync -avz --delete --exclude='.user.ini' ` +
    `-e "${SSH}" "${join(root, "dist")}/" "${USER}@${HOST}:${REMOTE_DIR}/"`,
);
console.log("部署完成 → https://mock.haloritual.com");
