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

//test neti
  module.exports = {
    function (browser) {
        browser
        .url('http://neti.ee')
        .waitForElementVisible('body')
        .assert.containsText('body','Äri ja Reisimine')
        .useXpath()
        .click("//a[text()='Post']")
        .useCss()
        .waitForElementVisible('body')
        .assert.containsText('body','Kullerteenused')
        .assert.title('NETI: /ÄRI/Postiteenused')
        .saveScreenshot(conf.imgpath('netitest.png'))
        .pause(2000)
        .end();
    }
}

//Eesti Päevaleht
module.exports = {
  function (browser) {
    browser
    .url('https://epl.delfi.ee/')
    .waitForElementVisible('body')
    .assert.title('Eesti Päevaleht')
    .saveScreenshot(conf.imgpath('eestipaevaleht.png'))
    .assert.elementPresent('a[href="/arvamus"]', 'Arvamusveeb')
    .assert.elementPresent('a[href="/arvamus"]', 'Toimetaja valik')
    .pause(2000)
    .end();
  }
}


//nightwatchjs
module.exports = {
  function (browser) {
    browser
    .url('https://nightwatchjs.org/')
    .waitForElementVisible('body')
    .click('a[href="/api"]')
    .pause(2000)
  }
}