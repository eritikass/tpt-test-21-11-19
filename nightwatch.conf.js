const path = require('path');
const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const SCREENSHOT_PATH = path.join(__dirname, 'screenshot');

const config = { // we use a nightwatch.conf.js file so we can include comments and helper functions
  'src_folders': [
    'test/e2e'     // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
  ],
  'output_folder': './node_modules/nightwatch/reports', // reports (test outcome) output by Nightwatch
  'selenium': {
    'start_process': true,
    'server_path': seleniumServer.path,
    'log_path': '',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver' : chromedriver.path
    }
  },
  'test_workers' : {'enabled' : true, 'workers' : 'auto'}, // perform tests in parallel where possible
  'test_settings': {
    'default': {
      'launch_url': 'http://localhost', // we're testing a Public or "staging" site on Saucelabs
      'selenium_port': 80,
      'selenium_host': 'ondemand.saucelabs.com',
      'silent': true,
      'screenshots': {
        'enabled': true, // save screenshots to this directory (excluded by .gitignore)
        'path': SCREENSHOT_PATH
      },
      'username' : '${SAUCE_USERNAME}',     // if you want to use Saucelabs remember to
      'access_key' : '${SAUCE_ACCESS_KEY}', // export your environment variables (see readme)
      'globals': {
        'waitForConditionTimeout': 10000    // wait for content on the page before continuing
      }
    },
    'local': {
      'launch_url': 'http://localhost',
      'selenium_port': 4444,
      'selenium_host': '127.0.0.1',
      'silent': true,
      'screenshots': {
        'enabled': true, // save screenshots taken here
        'path': SCREENSHOT_PATH
      }, // this allows us to control the
      'globals': {
        'waitForConditionTimeout': 15000 // on localhost sometimes internet is slow so wait...
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': ['start-fullscreen'],
          'w3c': false,
          'prefs' :
          {
            'credentials_enable_service' : false,
            'profile.password_manager_enabled' : false
          }
        },
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },
    'chrome': { // your local Chrome browser (chromedriver)
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'acceptInsecureCerts': true,
        'chromeOptions' :
          {
            'args' : ['start-fullscreen'],
            'prefs' :
            {
              'credentials_enable_service' : false,
              'profile.password_manager_enabled' : false
            }
          }
      }
    },
  }
};
module.exports = config;


/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (filename) {
  return path.join(SCREENSHOT_PATH, `${+new Date()}-${filename}`);
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
