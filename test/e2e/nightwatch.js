module.exports =
{
  'nightwatch test': function(browser)
  {
    browser
      .url('http://neti.ee')
      .waitForElementVisible('body')

      .pause(5000)
      .end();
  }
};