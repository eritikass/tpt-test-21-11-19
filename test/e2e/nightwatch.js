var config = require('../../nightwatch.conf.js');

module.exports = { 
    'nightwatch': function (browser) {
        browser
        .maximizeWindow()
        .url('https://nightwatchjs.org/')
        .pause(500)
        .waitForElementVisible('body')
        .click('#navbar > ul > li:nth-child(4) > a')
        .pause(500)
        .waitForElementVisible('body')
        .click('#api-container > div.background > div > div > div.col-md-3 > div > ul > li.active > ul > li:nth-child(12)> a')
        .pause(500)
        .saveScreenshot(config.imgpath("pilt3.png"))
        .pause(500)
        .end();
    }
} 