require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api')
var request = require('request')

//Add the code required to import the keys.js file and store it in a variable.
var fs = require('fs')

fs.readFile('keys.js','utf8', function(err, fileContents){
    if(err){
        console.log(err)
    }
    console.log(fileContents)
    console.log(typeof(fileContents))
    return fileContents
})


