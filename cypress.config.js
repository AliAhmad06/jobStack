const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  experimentalStudio: true,

  env: {
    Email_Address: 'junaid.amin@yopmail.com',
    Password: '12345678',
  },
  e2e: {
    baseUrl: 'https://career.orcaloholding.co.uk/',
    excludeSpecPattern: ['*/**/1-getting-started', '*/**/2-advanced-examples'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
