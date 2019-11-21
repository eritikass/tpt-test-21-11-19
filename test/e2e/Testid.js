var conf = require("../../nightwatch.conf.js");

module.exports = {
  "Testid": function (browser) {
    browser
      .url("http://neti.ee")

      .waitForElementVisible("body")

      .maximizeWindow()

      .assert.containsText("body", "Äri ja Reisimine")

      .useXpath()
      .pause(2500)
      .click("/html/body/div[3]/div[8]/div[1]/div[2]/h2[2]/a")
      .pause(2500)     
      .click("/html/body/div[3]/div[8]/div[1]/div[2]/div/ul/li[68]/a")
      .useCss()

      .useCss()
      .assert.containsText("body", "Kullerteenused")
      .getTitle((title) => {
        browser.assert.equal(title, "NETI: /ÄRI/Postiteenused");
      })

      .saveScreenshot(conf.imgpath("Pilt0.png"))

      .useXpath()
      .click("/html/body/div[3]/div[8]/div[1]/ul[2]/li[7]/h3/a")
      .useCss()

      .getTitle((title) => {
        browser.assert.equal(title, "Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti");
      })

      .saveScreenshot(conf.imgpath("Pilt0.png"));

  }
};
