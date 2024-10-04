import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the following configuration
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
