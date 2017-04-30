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

	// function to convert string to integer
	function convertScores(array) {
		var convertedArray = [];
		for (var i = 0; i < array.length; i++) {
			var scoreInteger = parseInt(array[i]);
			convertedArray.push(scoreInteger);
			}
			return convertedArray;
		}

		var totalDifference = 0;
		var total = 100;
		var scoreDiff = 0;
		var friendMatch = [];

		// Adding newFriend data into JSON
		var newFriend = (req.body)
		// friendsData.push(newFriend);
		console.log(newFriend);

		// Converting newFriendScore string in to integer
		var newFriendScore = convertScores(req.body.scores);
		console.log("newFriendScore converted: ", newFriendScore);

		if (friendsData.length > 0) {
			console.log("friends data length: ", friendsData.length);
			// Loop through each friend from data and convert string to integers
			for (var i = 0; i < friendsData.length; i++) {
				var friendsScoreConverted = convertScores(friendsData[i].scores);
				console.log("Names: ", friendsData[i].name);
				console.log("friends data converted: ", friendsScoreConverted);

				// Loop through each friend's index
				for(var j = 0; j < friendsScoreConverted.length; j++) {
					console.log("newFriendScore[j]: ", newFriendScore[j]);
					console.log("friendsScoreConverted[j]: ", friendsScoreConverted[j]);

					// Calculate the difference between newFriend and friendsData
					scoreDiff = Math.abs(newFriendScore[j] - friendsScoreConverted[j]);
					console.log("index score diff: ", scoreDiff);
					totalDifference += scoreDiff;
					console.log("total difference: ", totalDifference);
				} // End loop, friendsScoreConverted.length 

				// If totalDifference between newFriend and friendsData score is less, then it is best matched
				if (totalDifference < total) {
					total = totalDifference;
					friendMatch = friendsData[i];
		
				} // End if statement
				
					console.log("total: ", total);
					console.log("Difference: ", totalDifference);
					console.log("friendMatch: ", friendMatch);
					console.log("friendsData[i].name: ", friendsData[i].name);
					
			} // End loop, friendsData.length

			console.log("Here's your match: " + friendMatch.name);
			console.log("Image: " + friendMatch.photo)
			res.json(friendMatch);
			// Add newFriend to database
			friendsData.push(req.body);
			res.json(true);

		} // End if statement


	}); // end app.post


}; // End .exports function




