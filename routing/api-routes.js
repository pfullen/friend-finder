
var friendsList = require('../data/friends.js');
var path = require('path');

// Routing and export
module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsList);
	});

	 app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        //var bestFriend = findBestFriend(currentUser);
        console.log("You can access new survey data on the server");
        console.log(currentUser);
        res.json(currentUser);
        console.log("This is my friends list" + friendsList);
        //res.json(bestFriend);
       // friendsList.push(currentUser);
    });
};




 


	