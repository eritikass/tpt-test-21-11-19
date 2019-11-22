var conf = require('../../nightwatch.conf.js');

module.exports =
{
  'nightwatch test': function(browser)
  {
    browser
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')

      .pause(2000)
      .execute(function()
      {
        document.querySelector('a[href=\'/api\']').click();
      });
      
    browser
      .pause(2000)
      .execute(function()
      {
        document.querySelector('a[href=\'#assert-urlEquals\']').click();
      });
    browser
      .saveScreenshot(conf.imgpath('assertUrl.png'))
      .pause(1000)
      .end();
  }};