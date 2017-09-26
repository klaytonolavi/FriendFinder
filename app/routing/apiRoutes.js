  // variable to hold the friends data being taken from friends.js
var friendsData = require("../data/friends.js");
var _ = require("lodash");

module.exports = function (app) {
  
  app.get("/api/friends", function (req, res) {
      res.json(friendsData);
  });

  
  app.post("/api/friends", function (req, res) {
      var scores = req.body.scores;
      var compareScores = [];

      friendsData.forEach(function (friend) {
          var friendScore = 0;

          friend.scores.forEach(function (score, num) {
              friendScore = friendScore + Math.abs(score - parseInt(scores[num]));
          });

          compareScores.push({
              "friend": friend,
              "score": friendScore
          });
      });

      // Using lodash, sort through all the scores and look for the lowest value to the highest
      // "Shift()" method removes the first element from an array and returns that element
      res.json(_.sortBy(compareScores, "score").shift());
  });

  app.post("/api/clear", function () {
      // Empty/clear out the arrays of data
      friendsData = [];
  });
};





