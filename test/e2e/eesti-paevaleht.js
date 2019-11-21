var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Test Eesti Päevaleht': function (browser) {
    browser
        .url('https://epl.delfi.ee/')
        .maximizeWindow()
        .assert.title('Eesti Päevaleht')
        .saveScreenshot(conf.imgpath('eesti_paevaleht.png'))
        .useXpath()
        .assert.containsText('/html/body/div[2]/div/div/div[3]/div/div[2]/div/div/section/div/div[1]/ul/li[1]/h3/a', 'ARVAMUSVEEB')
        .assert.containsText('//*[@class="editors-choice__heading"]', 'TOIMETAJA VALIK')
        .assert.elementPresent('//*[@class="editors-choice"]//*[@class="col col-24" and position() > 2]')
        .click('//a[text()="Faktikontroll"]')
        .pause(2500)
        .assert.title('Faktikontroll - Eesti Päevaleht')
        .useCss()
        .assert.containsText("body","FAKTIKONTROLL")
        .end();
    }
};