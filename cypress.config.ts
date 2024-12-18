import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
      // '_on' and '_config' are currently unused but may be used in the future
    },
  },
});
