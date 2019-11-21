var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('http://www.github.com/dwyl')
      .waitForElementVisible('body')
      .assert.containsText('body', 'dwyl.com')
      .saveScreenshot(conf.imgpath('dwyl.png'))
      .end();
    }
  };
