var conf = require("../../nightwatch.conf.js");

module.exports = {
  "Nightwatch": function (browser) {
    browser
      .url("https://nightwatchjs.org/")

      .waitForElementVisible("body")

      .maximizeWindow()

      .useXpath()
      .click("/html/body/section[1]/div/div[4]/section[1]/div/nav/div/div[2]/ul/li[4]/a")
      .click("/html/body/section[5]/div[2]/div/div/div[1]/div/ul/li[1]/ul/li[12]/a")
      .useCss()

      .saveScreenshot(conf.imgpath("Pilt4.png"));


  }
};
