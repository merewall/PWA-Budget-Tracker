# PWA-Budget-Tracker

PWA budget tracker app that allows users to add expenses and deposits with or without a connection

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION

A budget tracker app that allows a user to track their withdrawals and deposits with or without a data/internet connection. When expenses or deposits are entered by a user offline, the entires will be added to the tracker when brought back online. The app is also a downloadable PWA.

## TABLE OF CONTENTS

- [DESCRIPTION](#description)
- [DEVELOPMENT CRITERIA](#development-criteria)
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [TESTS](#tests)
- [TECHNOLOGIES USED](#technologies-used)
- [LINKS](#links)
- [QUESTIONS](#questions)

## DEVELOPMENT CRITERIA

The following acceptance criteria was used to guide the development of this project:

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

## INSTALLATION

1. Fork the [repository](https://github.com/merewall/PWA-Budget-Tracker) from [GitHub](https://github.com/) to your profile.
2. Clone the repository down to your local machine in command-line using: `git clone`.
3. Node.js is required to run this application. Click [here](#installing-nodejs) for instructions on installing Node.js.
4. Install the required dependices to your cloned directory in command-line using: `npm install`

   - Or install the packages individually...
     - Install [express](https://www.npmjs.com/package/express) to your cloned directory in command-line using: `npm install express`.
     - Install [mongoose](https://www.npmjs.com/package/mongoose) to your cloned directory in command-line using: `npm install mongoose`
     - Install [morgan](https://www.npmjs.com/package/morgan) to your cloned directory in command-line using: `npm install morgan`
     - Install [nodemon](https://www.npmjs.com/package/nodemon) to your cloned directory in command-line using: `npm install --save-dev nodemon`
     - Install [compression](https://www.npmjs.com/package/compression) to your cloned directory in command-line using: `npm install compression`
     - Install [lite-server](https://www.npmjs.com/package/lite-server) to your cloned directory in command-line using: `npm install lite-server`

   ###### Installing Nodejs

   1. Check if you already have Node.js in command-line by typing `node`.
   2. If you have Node.js on your machine, a message similar to `Welcome to Node.js` will appear.
   3. If you do not have Node.js, an error message will appear and you need to download it.
   4. To download Node.js, click [here](https://nodejs.org/en/download/).
   5. After download and installation is complete, restart your command-line terminal and redo step 1 to confirm a successful installation.
   6. After Node.js is on your local machine, return to the [installation](#installation) instructions for this project's application above.

## USAGE

_If cloned down to your computer..._

1. Navigate to the directory of the application in your terminal using `cd`, if not already there.
2. If you haven't already, be sure you followed all [installation](#installation) instructions to install node, express, mongoose, morgan, nodemon, lite-server, and compression dependencies.
3. Initialize the application in CLI using: `npm start`.
4. Go to https://localhost:3000 to visit application

_If accessing deployed Heroku application..._

1. Open the budget tracker app.
2. To enter a deposit, type a name for the transaction and the amount and click "Add Funds".
3. To enter an expense, type a name for the transactino and the amount and click "Subtract Funds".
4. Any deposits or expenses will be listed in the table below the form entry.
5. Your balance over time will be displayed as a chart below the table of deposits and expenses.
6. If you enter deposits or expenses offline, the offline entries will be added to the tracker when brought back online.
7. To download the site for app-like use:
   - On a desktop, find and click the "Install" icon in the url search bar (the far right)
   - On a mobile:
     1. Tap the Share button in Safari (ios) or Menu button in Chrome (Android)
     2. Tap the icon labeled Add to Home Screen
     3. Name your PWA, then tap Add.
     4. Locate the app on your phone homescreen.

_Budget Tracker in Browser:_

<img src="https://github.com/merewall/PWA-Budget-Tracker/blob/main/public/assets/images/homepage.png" alt="desktop view of budget tracker homepage" width="500px" height="350px">

_Budget Tracker Installed:_

<img src="https://github.com/merewall/PWA-Budget-Tracker/blob/main/public/assets/images/installed.png" alt="installed view of budget tracker app" width="500px" height="350px">

_IndexedDB and Cache:_

<img src="https://github.com/merewall/PWA-Budget-Tracker/blob/main/public/assets/images/application.png" alt="desktop view of IndexedDB storage and Cache while offline" width="500px" height="300px">

## LICENSE

This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## CONTRIBUTING

If you'd like to contribute to the project, please create a pull request on a new branch of the [repository](https://github.com/merewall/PWA-Budget-Tracker) for review.

## TESTS

No current tests for this application.

## TECHNOLOGIES USED

- [x] HTML
- [x] CSS
- [x] JavaScript
- [x] [Node.js](https://nodejs.org/en/)
- [x] [express](https://www.npmjs.com/package/express)
- [x] [mongoose](https://www.npmjs.com/package/mongoose)
- [x] [morgan](https://www.npmjs.com/package/morgan)
- [x] [nodemon](https://www.npmjs.com/package/nodemon)
- [x] [compression](https://www.npmjs.com/package/compression)
- [x] [lite-server](https://www.npmjs.com/package/lite-server)
- [x] PWAs with web manifests and service worker

## LINKS

- The [repository](https://github.com/merewall/PWA-Budget-Tracker) for this application.
- The [deployed application]().

## QUESTIONS

For any questions, please check out my GitHub profile or send me an email:

- GitHub: [merewall](https://github.com/merewall)
- Email: [mlwall@alumni.princeton.edu](mailto:mlwall@alumni.princeton.edu)
