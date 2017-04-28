// Requiring data sources for route
var friendsData = require("../data/friends.js");
console.log(friendsData);

//Routing
module.exports = function(app) {
	// Add Get route for api
	// Display a JSON of all possible friends
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	}) // End .get function

	// Add Post route for api
	app.post("/api/friends", function(req, res) {
		friendsData.push(req.body);
		res.json(true);
	});





	// 	var newFriend = req.body
	// 	// console.log(newFriend);
	// 	friendsData.push(req.body);

	// 	var newFriendScore = [];
	// 	for (var i = 0; i < newFriend.score.length; i++) {
	// 		newFriendScore.push(newFriend.scores[i]);
	// 	}

	// 	res.json(newFriend);
	// });

	// Handle incoming survey results
	// Handle compatibility logic


		// var user = req.params.friendsData;

		// if (user) {
		// 	console.log(friends);

		// 	for (var i = 0; i < friendsData.length; i++) {
		// 		if (user === friendsData[i].name) {
		// 			return res.json(friendsData[i]);

		// 		} // End if statement
		// 	} // End for loop
		// } // End if statement


}; // End .exports function