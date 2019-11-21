module.exports =
{
  'päevaleht test': function(browser)
  {
    browser
      .url('https://epl.delfi.ee/')
      .waitForElementVisible('body')

      .assert.title('Eesti Päevaleht')
      .saveScreenshot('./screenshot/paevaleht.png')
    //   .assert.elementPresent('.row')
    //   .assert.elementPresent('.col.col-8')
    //   .useXpath()
    //   .assert.elementPresent('.opinion-web__menu__heading')
    //   .assert.elementPresent('.editors-choice__heading')
    //   .assert.attributeContains('.row', 'href', 'google.com');
      .useXpath()
      .click('/html/body/div[1]/div/div/div[1]/div/div[2]/div/div/section/div/div[1]/ul/li[3]/a')
      
      .assert.attributeContains('/html/body/div[1]/div/div/div[1]/div/section/div[2]/div[1]/div', 'href', 'faktikontroll')

      .pause(5000)
      .end();
  }
};