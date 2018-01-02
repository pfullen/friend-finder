var path = require('path');
var friends = require('../data/friends.js');
var users = [];
var fs = require('fs');
var randomUser = require('random-user');
var file = '../data/data.json';
var jsonfile = require('jsonfile');
//  Routing 


function getUsers(num) {
    // Get n number of users 

    for (i = 0; i < 50; i++) {
        randomUser()
            .then((data) => {

                    //names.forEach(function(name){


                    var name = data.name.first;
                    var gender = data.gender;
                    var photo = data.picture.thumbnail;
                    var scores = [];

                    for (i=0; i<10 ; i++) {
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
                   
                }

            )
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
        //friends.forEach(function(friend) {
        //getUsers(20);
        //onsole.log(users);
        console.log(friends)
            res.render("friends", {friends})
            //})
    });
};