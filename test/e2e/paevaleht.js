var conf = require('../../nightwatch.conf.js');

module.exports =
{
  'päevaleht test': function(browser)
  {
    browser
      .url('https://epl.delfi.ee/')
      .waitForElementVisible('body')

      .assert.title('Eesti Päevaleht')
      .saveScreenshot(conf.imgpath('paevaleht.png'))
      .assert.elementPresent('a[href=\'/arvamus\']') // kuna sama hrefiga elemente on veel siis tahaks teha seda kuidagi unikaalseks
      .assert.elementPresent('.col.col-8')
    //   .useXpath()
    //   .assert.elementPresent('.opinion-web__menu__heading')
    //   .assert.elementPresent('.editors-choice__heading')
    //   .assert.attributeContains('.row', 'href', 'google.com');
      .click('a[href=\'/faktikontroll\']')

    //test that article list contains word "FAKTIKONTROLL"
    // .assert.attributeContains('/html/body/div[1]/div/div/div[1]/div/section/div[2]/div[1]/div', 'href', 'faktikontroll')

      .setValue('input[class=\'header-search__input\']', 'kass')
      .click('button[class=\'header-search__button\']')

      .waitForElementVisible('body')
      .saveScreenshot(conf.imgpath('kass.png'))
      .pause(100)
      .end();
  }
};