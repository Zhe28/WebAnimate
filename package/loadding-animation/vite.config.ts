import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/WebAnimate/loadding/",
  build: {
    outDir: "../../docs/loadding",
    assetsInlineLimit: 4096000,
  },
});
