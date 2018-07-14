require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

const keys = require('./keys.js');

var userInput = process.argv[2];

if (userInput = "my-tweets") {
    request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=" + consumer_key, function (error, response, body) {

        // If the request was successful...
        if (!error && response.statusCode === 200) {

            // Then log the body from the site!
            console.log(consumer_key);
        }
    });

};