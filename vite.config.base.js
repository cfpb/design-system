import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },

  // plugins: [],

  resolve: {
    alias: {
      "@cfpb/cfpb-design-system": path.resolve(
        __dirname,
        "packages/cfpb-design-system/",
      ),
    },
  },
});
