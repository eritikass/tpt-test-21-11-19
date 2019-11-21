var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Eestipaevaleht test': function (browser) {
    browser
      .url('https://epl.delfi.ee/')
      .maximizeWindow()
      .waitForElementVisible('body')
      .assert.title('Eesti Päevaleht')
      
      .useXpath()
      .assert.containsText('//*[@id="main"]/div[2]/div/div/section/div/div[1]/ul/li[1]/h3','ARVAMUSVEEB')
      .assert.containsText('//*[@id="main"]/div[2]/div/div/section/div/div[2]/div/h3', 'TOIMETAJA VALIK')
      .assert.elementPresent('//*[@class="editors-choice"]//*[@class="col col-24" and position() > 2]')
      
      .click('//a[text()="Faktikontroll"]')
      .pause(2500)
      .useCss()
      .assert.title('Faktikontroll - Eesti Päevaleht')

      .assert.containsText("body","FAKTIKONTROLL")

      .setValue(".header-search__input", "kass")


      .saveScreenshot(conf.imgpath('eestipaevaleht_screenshot.png'))

      
      .end();
    }
    
  };