const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './pruebas-validacion',
  reporter: 'list',
  use: {
    baseURL: 'http://localhost/MarketGo-Full-Project',
    headless: false
  }
});