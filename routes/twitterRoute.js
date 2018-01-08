var twitterAPI = require('../social-media/twitter');
var validator = require('../validator/validation');

exports.getFavouriteLists = function (req, res) {
    var isValid = validator.isValidGetTweet(req.params);
    if(!isValid){
        twitterAPI.getFavouriteList(req).then(function(response){
            res.json(response);
        }).catch(function(error){
            res.json(error);
        });
    } else{
        var error = { "error" : isValid};
        res.json(error);
    }
}

exports.getTweets = function (req, res) {
    var isValid = validator.isValidGetTweet(req.params);
    if(!isValid){
        twitterAPI.getTweets(req.params).then(function(response){
            res.json(response);
        }).catch(function(error){
            res.json(error);
        });
    } else{
        var error = { "error" : isValid};
        res.json(error);
    }
}

exports.postTweet = function (req, res) {
    var isValid = validator.isValidToPost(req.body);
    if(!isValid){
        twitterAPI.postTweet(req.body).then(function(response){
            res.json(response);
        }).catch(function(error){
            res.json(error);
        });
    } else{
        var error = { "error" : isValid};
        res.json(error);
    }
}