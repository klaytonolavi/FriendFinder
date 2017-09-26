  // variable to hold the friends data being taken from friends.js
var friendsData = require("../data/friends.js");
var _ = require("lodash");

// function within module.exports 
module.exports = function (app) {
  
    // getting the friends data with the GET method 
  app.get("/api/friends", function (req, res) {
      res.json(friendsData);
  });

    // post method to check scores between users input on the form and friends in the friends array
  app.post("/api/friends", function (req, res) {
      var scores = req.body.scores;
      var compareScores = [];

        // each friend starts with 0 score
      friendsData.forEach(function (friend) {
          var friendScore = 0;

          // function that calculates friendscore
          friend.scores.forEach(function (score, num) {
              friendScore = friendScore + Math.abs(score - parseInt(scores[num]));
          });

          // gives each friend their own score 
          compareScores.push({
              "friend": friend,
              "score": friendScore
          });
      });

      // sorts through all the scores with lodash and looks for the lowest value to the highest
      // shift removes the first element from the array and returns it
      res.json(_.sortBy(compareScores, "score").shift());
  });

  app.post("/api/clear", function () {
      // Empty/clear out the arrays of data
      friendsData = [];
  });
};





