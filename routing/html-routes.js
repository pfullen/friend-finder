var path = require('path');
var friends = require('../data/friends.js');
var users = [];
var fs = require('fs');
var randomUser = require('random-user');
var file = '../data/data.json';
var jsonfile = require('jsonfile');
//  Routing 
var friendsByGender = [];

function getUsers(num) {
    // Get n number of users 

    for (i = 0; i < 50; i++) {
        randomUser()
            .then((data) => {
                var name = data.name.first;
                var gender = data.gender;
                var photo = data.picture.thumbnail;
                var scores = [];

                for (i = 0; i < 10; i++) {
                    var rndNum = Math.floor((Math.random() * 5) + 1);
                    scores.push(rndNum);
                }
                var user = {
                    "name": name,
                    "gender": gender,
                    "photo": photo,
                    "scores": scores
                }
                users.push(user);

                console.log(users);
            })
            .catch((err) => console.log(err));
    }
}



module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/friends", function(req, res) {


        res.render("friends", {
            friends
        })
    });
    app.get("/female-friends", function(req, res) {
        var femaleFriends = [];
        friends.forEach(function(friend) {
      		         	

             if (friend.gender === "female") {
                femaleFriends.push(friend)
            } 
        })
        res.render("friends", {friends: femaleFriends});
           
    });
    app.get("/male-friends", function(req, res) {
        var maleFriends = [];
        friends.forEach(function(friend) {
      		         	

             if (friend.gender === "male") {
                maleFriends.push(friend)
            } 
        })
        res.render("friends", {friends: maleFriends});
           
    })

};