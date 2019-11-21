var config = require('../../nightwatch.conf.js');

module.exports = { 
    'Demo test GitHub': function(browser) {
        browser
        .url('http://neti.ee');
        browser.maximizeWindow()
        .assert.containsText('body', 'Äri ja Reisimine')
        .pause(500)
        .useXpath()
        .click('//a[@href="/cgi-bin/teema/ARI/Postiteenused/"]')
        .pause(500)
        .assert.containsText('//h2[@class="vahepealkiri"]', 'Kullerteenused')
        .pause(500)
        .assert.title('NETI: /ÄRI/Postiteenused')
        .pause(500)
        .saveScreenshot(config.imgpath("pilt.png"))
        .click('//a[@href="http://www.dhl.ee/"]')
        .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
        .saveScreenshot(config.imgpath("pilt2.png"))
        .end();
    }
}