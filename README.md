# hash-front-challange
 Hash frontend test.

# Info
 This project uses npm, dotenv, express, axios, less and Nightwatch and chromedriver for tests.
 - https://www.npmjs.com/
 - https://github.com/motdotla/dotenv#readme
 - https://expressjs.com/pt-br/
 - https://github.com/axios/axios
 - http://lesscss.org/
 - https://nightwatchjs.org/

# Install
 npm install
 cp .env.sample .env

# Run
 npm run start

# Tests
 Testing Inputs:
 - npm run start
 - npm run nightwatch tests/inputs.js

 Testing Timeout:
 - npm run start
 - npm run nightwatch tests/timeout.js

 Testing Internal Error:
 - npm run start
 - npm run nightwatch tests/internalError.js

  Testing Delay:
 - npm run start
 - npm run nightwatch tests/delay.js