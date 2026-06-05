import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// @hulianui/ui 通过 link: 软链到 ../hulian/packages/ui，源码 TS 直接被消费方转译。
const hulianRoot = fileURLToPath(new URL("../hulian", import.meta.url));

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    // 软链场景下避免出现两份 React（invalid hook call 根源）。
    dedupe: ["react", "react-dom", "@emotion/react", "motion"],
  },
  server: {
    port: 49173,
    // 允许 Vite 读取软链到的 hulian 源码（在项目根之外）。
    fs: { allow: [".", hulianRoot] },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // 库内 399 处 'use client' 在打包时是无害指令，静音。
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" &&
          /use client/.test(warning.message)
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
});
