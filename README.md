# friend-finder
App to find compatible friends

Link to heroku   https://pjf-friend-finder.herokuapp.com

## Setup
 +
 +First clone this repo to your local directory.
 +
 +Next, navigate to your repo in your command terminal, and enter:
 +
 +`npm install`
 +
 +This will ensure you have all the necessary NPM packages installed to run this generator.
 +
 +Feel free to load your own starter data into the `friends.js` file, or use the ones already in there. It's ok, I don't know them either.
 +
 +## Overview
 +
 +The home page of the app serves the purposes of telling you about the app.
 +
 +Navigating to the `survey` page will present you with a 10 item questionnaire: name, photo link, and 10 questions to determine your best friend.
 +
 +All questions are required.
 +
 +Clicking submit will generate your match and display it to you in a pop modal.

# Routing
- This app uses handlebars to display friends
- main.handlebars and friends.handlebars are used to serve the following pages.
	- /friends
	- /female-friends
	- /male-friends
	- This is accomplished by filtering the data and assinging 

# Data Seeding
- This app used npm random User


# Future Development
- Add a log in page
- Connect to MongoDB
- Refactor api-routes.js to server 
- Need to add Nav links