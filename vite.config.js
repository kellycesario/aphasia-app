import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@icons": resolve(__dirname, "src", "components", "icons"),
      "@components": resolve(__dirname, "src", "components"),
      "@atoms": resolve(__dirname, "src", "components", "atoms"),
      "@molecules": resolve(__dirname, "src", "components", "molecules"),
      "@organisms": resolve(__dirname, "src", "components", "organisms"),
      "@styles": resolve(__dirname, "src", "styles"),
      "@pages": resolve(__dirname, "src", "pages")
    },
  },
});
