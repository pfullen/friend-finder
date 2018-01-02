
var friends = require('../data/friends.js');
var path = require('path');
var  fs = require('fs');
var jsonfile = require('jsonfile')
var file = './data/data.json'
var obj = [];

// Routing and export
module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	 app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        //var bestFriend = findBestFriend(currentUser);
        friends.push(currentUser);
        console.log(friends);

        obj.push(currentUser)
        
        //jsonfile.writeFileSync(file, obj)
        


        res.json(currentUser);
        
        //res.json(bestFriend);
       // friendsList.push(currentUser);
    });
};




 


	