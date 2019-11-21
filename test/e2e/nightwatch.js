var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Nightwatch test': function (browser) {
    browser
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .useXpath()
      .click("//a[text()='API Reference']")
      .waitForElementVisible("//h2[text()='assertions']", 5000)
      
      .end();
    }
  };
