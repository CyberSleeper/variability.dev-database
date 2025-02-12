const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    BASE_URL: 'https://variability.amanah-staging.cs.ui.ac.id',   //TODO: somehow make this variable based on .env.development, .env.production and env.testing
  },
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
