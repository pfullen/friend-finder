var friends = require('../data/friends.js');
var path = require('path');
var fs = require('fs');
//var jsonfile = require('jsonfile')
//var file = '../data/data.json'
var obj = [];

// function to get the best friend for the user
function findBestFriend(user) {
    var userScores = user.scores;
    //the max difference in score between two users for each question is 4
    //there are 10 questions
    //the total max difference is 4*10
    var maxDiff = 4 * 10;
    var winningFriend;
    // iteratethru friends
    for (var i = 0; i < friends.length; i++) {
        var friendScores = friends[i].scores;
        var totalDiff = 0;
        // // iterate thru friend's scores
        for (var j = 0; j < friendScores.length; j++) {
            totalDiff = totalDiff + Math.abs(userScores[j] - friendScores[j]);
        }
        if (totalDiff <= maxDiff) {
            winningFriend = friends[i];
            maxDiff = totalDiff;
        }
    }
    console.log("This is the winning friend" + winningFriend)
    return winningFriend;
}


// Routing and export
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        
        console.log(friends);

        var bestFriend = findBestFriend(currentUser);
        //jsonfile.writeFileSync(file, obj)

        console.log("This is your best friend" + bestFriend.name);

        res.json(bestFriend);
        friends.push(currentUser);
    });
};