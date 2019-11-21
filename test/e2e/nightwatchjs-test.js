var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test Nightwatch': function (browser) {
    browser
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      //.maximizeWindow()
      .pause(1000)
      .execute(function() {
        document.querySelector('a[href=\'/api\']').click();
      });


    browser
      .pause(1000)
      .execute(function() {
        document.querySelector('a[href=\'#assert-urlEquals\']').click();
      });

    browser
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(conf.imgpath(browser) + 'nightwatch.png')
      .pause(1000)
      .end();
  }
};