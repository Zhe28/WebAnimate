import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/scroll/",
  build: {
    outDir: "../../dist/scroll",
    assetsInlineLimit: 4096000,
  },
});