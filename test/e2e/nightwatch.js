
var conf = require('../../nightwatch.conf.js');

module.exports = {
  'töö': function (browser) {
    browser
      .maximizeWindow()
      .url('https://www.nightwatchjs.org')
      .waitForElementVisible('body')

      .execute(function() {
		  document.querySelector('a[href=\'/api\']').click()
	  });

      browser.waitForElementVisible('body')
      .execute(function() {
		  document.querySelector('a[href=\'#assert-urlEquals\']').click()
	  });

      browser.pause(2000)
      .saveScreenshot(conf.imgpath('nightwatch.png'))
      .end();
    }
  };
