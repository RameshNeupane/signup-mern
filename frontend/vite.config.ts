import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@apis": path.resolve(__dirname, "./src/apis/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@config": path.resolve(__dirname, "./src/config/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@redux": path.resolve(__dirname, "./src/redux/"),
      "@types": path.resolve(__dirname, "./src/types/"),
    },
  },
});
