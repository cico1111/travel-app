# Project Instructions

The app will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast.

# Dependencies
"dependencies": {
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "webpack": "^4.46.0",
    "webpack-cli": "^4.10.0",
    "workbox-webpack-plugin": "^6.5.3"
  },
  "devDependencies": {
    "@babel/core": "^7.18.9",
    "@babel/preset-env": "^7.18.9",
    "babel-loader": "^8.2.5",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.6.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^28.1.3",
    "mini-css-extract-plugin": "^1.6.2",
    "node-sass": "^4.14.1",
    "optimize-css-assets-webpack-plugin": "^6.0.1",
    "sass-loader": "^7.3.1",
    "style-loader": "^0.23.1",
    "terser-webpack-plugin": "^4.2.3",
    "webpack-dev-server": "^4.9.3"
  }

## Install:
$ npm install

Start the webpack dev server:
$ npm run build-dev 

## Generate a dist folder for prod:
$ npm run build-prod 

Run the Express server on port 3000:
$ npm start 
Open http://localhost:3000 to view it in the browser.

## Run unit tests
$ npm test


