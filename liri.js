require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

const keys = require('./keys.js');

var userInput = process.argv[2];

console.log("Hey there!");