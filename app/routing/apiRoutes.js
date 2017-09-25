var friendsData = require("../data/friends.js");

console.log(friendsData);
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    console.log("retreiving friends!");
    res.json(friendsData);
  });
  app.post("/api/friends", function(req, res) {
    console.log('saving a new friend!');
    friendsData.push(req.body);
    console.log(friendsData);
    res.json(friendsData);
    friendsData.push(req.body);
    var friend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };
    console.log(friend);
  });
}
