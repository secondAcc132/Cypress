const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'ja3uea',
    // retries: 1,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})