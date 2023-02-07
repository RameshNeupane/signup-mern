import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: path.resolve(__dirname, "./src/components/"),
      forms: path.resolve(__dirname, "./src/components/forms/"),
      layout: path.resolve(__dirname, "./src/components/layout/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      assets: path.resolve(__dirname, "./src/assets/"),
      apis: path.resolve(__dirname, "./src/apis/"),
      redux: path.resolve(__dirname, "./src/redux/"),
    },
  },
});
