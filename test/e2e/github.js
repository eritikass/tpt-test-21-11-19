var conf = require('../../nightwatch.conf.js');

//neti.ee
module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('http://neti.ee')
      .pause(500)
      .maximizeWindow()
      .assert.containsText('body', 'Äri ja Reisimine')
      .pause(500)
      .waitForElementVisible('a[href="/cgi-bin/teema/ARI/Postiteenused/"]', 1000)
      .click('a[href="/cgi-bin/teema/ARI/Postiteenused/"]')
      .pause(500)
      .assert.containsText('body', 'Kullerteenused')
      .pause(500)
      .assert.title('NETI: /ÄRI/Postiteenused')
      .pause(500)
      .saveScreenshot(conf.imgpath('pic.png'))
      .click('a[href="http://www.dhl.ee/"]')
      .pause(500)
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(conf.imgpath('pic.png'))
      .end();
    }
  };

//Eesti Päevaleht
  module.exports = {
    function (browser) {
      browser
        .url('https://epl.delfi.ee')
        .pause(500)
        .maximizeWindow()
        .assert.title('Eesti Päevaleht')
        .pause(500)
        .saveScreenshot(conf.imgpath('pic.png'))
        .assert.elementPresent('a[href="/arvamus"]', 'ArvamusVeeb')
        .assert.elementPresent('a[href="/arvamus"]', 'Toimetaja valik')
        .end()
    }
  };

  //Nightwatchjs.org
  module.exports = {
    function (browser) {
      browser
        .url('https://nightwatchjs.org')
        .pause(500)
        .maximizeWindow()
        .pause(500)
        //.click('a[href="/api"]')
        .pause(500)
        .waitForElementVisible('div[class="sample-test"]')
        //.moveToElement('div[class="sample-test"]',4 , 5)
        .pause(500)
        .end();
        }
    };
  

