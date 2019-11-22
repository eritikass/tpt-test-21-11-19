## To run tests

Neti.ee test: npm run neti
Eesti Päevaleht test: npm run paevaleht
Nightwatch test: npm run nightwatch


## getting started

1. fork git repository
1. git clone your fork
1. install npm packages `npm ci`
1. testing:
   - visual testing ([nightwatchjs](https://nightwatchjs.org/)): `npm run test`
1. create merge/pull request from your fork


## tasks

> * You can make tasks in any order
> * lines marked with **bonus** are optional (and much harder)

1. Test [neti.ee](http://neti.ee)
   - open http://neti.ee
   - test that contains word "Äri ja Reisimine"
   - open "Äri ja Reisimine" -> "Post"
   - test that contains word "Kullerteenused"
   - test that page title is correct
   - make screenshot
   - open "DHL Estonia"
   - test title
   - make screenshot
   - **bonus**: check that domain of the page is now `www.logistics.dhl`
1. Test [Eesti Päevaleht](https://epl.delfi.ee/)
   - open https://epl.delfi.ee
   - test that page title is Eesti Päevaleht
   - make screenshot
   - test that "ARVAMUSVEEB" is present
   - test that "TOIMETAJA VALIK" is present and contains at-least 2 articles
   - open "FAKTIKONTROLL"
   - test that article list contains word "FAKTIKONTROLL"
   - **bonus**: test that title of every article contains word "FAKTIKONTROLL"
   - search word "kass"
   - make screenshot
1. Test [nightwatchjs.org](https://nightwatchjs.org/)
   - open https://nightwatchjs.org/
   - open "API Reference"
   - scroll to "assert.urlEquals"
   - make screenshot
   - **bonus**: test that assert.urlEquals has 2 Parameters
1. Add project linter using [eslint](https://eslint.org/)
   - 2 spaces for indent
   - use `'` instead of `"`
   - all lines end with semicolon
   - fix all errors
   - command to run linter: `npm run lint`
   - add git hook to run linter locally each time you commit new code (you can use [husky](https://www.npmjs.com/package/husky) or any tool you like)
