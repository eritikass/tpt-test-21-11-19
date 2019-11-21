module.exports =
{
  'neti test': function(browser)
  {
    browser
      .url('http://neti.ee')
      .waitForElementVisible('body')

      
      .assert.containsText('body', 'Äri ja Reisimine')
      .useXpath()
      .pause(500)
      .click('/html/body/div[3]/div[8]/div[1]/div[2]/h2[2]/a')
      .pause(500)
      .click('/html/body/div[3]/div[8]/div[1]/div[2]/div/ul/li[68]/a')
      .pause(500)
      .useCss()
      .assert.containsText('body', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot('./screenshot/postiteenused.png')
      .useXpath()
      .click('/html/body/div[3]/div[8]/div[1]/ul[2]/li[7]/h3/a')
      .getTitle()
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot('./screenshot/dhlEST.png')
      .assert.urlContains('www.logistics.dhl')
      .pause(1000)
      .end();
  }
};