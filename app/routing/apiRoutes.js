//Dependencies
var path = require("path");
var friendsData = require("../data/friends");

module.exports = function (app) {
    //Route to display JSON file  
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    //Compatability logic
    app.post('/api/friends', function (req, res) {

    });
};