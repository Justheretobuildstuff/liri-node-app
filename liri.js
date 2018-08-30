require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

const keys = require('./keys.js');

var userInput = process.argv[2];

var client = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret
  });
   
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });

  /*
if (userInput = "my-tweets") {
    request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request was successful...
        if (!error && response.statusCode === 200) {

            // Then log the body from the site!
            console.log(keys.twitter.access_token_key);
        }
    });

};

*/