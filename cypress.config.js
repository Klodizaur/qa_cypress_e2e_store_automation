const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationteststore.com',
    setupNodeEvents(on, config) {
      on('task', {
        loginUser() {
          const userName = "mojSuperLogin";
          const userPassword = "mojeSuperHaslo";
          return {
            username: userName,
            password: userPassword
          };
        }
      })
    }
  }
});