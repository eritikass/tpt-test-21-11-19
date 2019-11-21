var conf = require("../../nightwatch.conf.js");

module.exports = {
  "Delfi": function (browser) {
    browser
      .url("https://epl.delfi.ee/")

      .waitForElementVisible("body")

      .maximizeWindow()

      .getTitle((title) => {
        browser.assert.equal(title, "Eesti Päevaleht");
      })

      .saveScreenshot(conf.imgpath("Pilt2.png"))

      .assert.containsText("body", "ARVAMUSVEEB")
      .assert.containsText("body", "TOIMETAJA VALIK")
      //.assert.attributeEquals('.col.col-8', 'a', true)

      .useXpath()
      .click("/html/body/div[2]/div/div/div[3]/div/div[2]/div/div/section/div/div[1]/ul/li[3]/a")
      .useCss()

      .assert.containsText("body","FAKTIKONTROLL")
      
      .setValue(".header-search__input", "kass")
      .saveScreenshot(conf.imgpath("Pilt3.png"));

  }
};
