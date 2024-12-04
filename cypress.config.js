const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://dev.crowncoinscasino.com/', // Fallback to dev
    defaultCommandTimeout: 20000,
    video: true, // Ensure video recording is enabled
    screenshotOnRunFailure: true, // Take screenshots on test failure
    setupNodeEvents(on, config) {
      // Customize browser launch options
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
          // Launch Chrome or Edge in incognito mode
          launchOptions.args.push('--incognito');
        } else if (browser.name === 'firefox') {
          // Launch Firefox in private mode
          launchOptions.args.push('-private');
        }
        return launchOptions; // Ensure the modified launch options are returned
      });
    },
  },
});
