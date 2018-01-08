
var Twitter = require('twitter');
var q = require('q');
var config = require('../config.json');

/**
 * Grab a list of favorited tweets
 **/
exports.getFavouriteList = function (req) {
    return new Promise((resolve, reject) => {
        var client = twitterClient(config);
        verifyUser(client).then(function(res){
            var options = { screen_name: req.screenName, count: config.limit };
            client.get('favorites/list', options, function(error, tweets, response) {
                if (!error) {
                    console.log(tweets);
                    resolve(tweets);
                } else{
                    reject(error);
                }
            });
        }).catch(function(error){
             reject(error);
        });
    });
}

exports.getTweets = function(req){
    var options = { screen_name: req.screenName, count: config.limit };
    return new Promise((resolve,reject) => {
        var client = twitterClient(config);
        verifyUser(client).then(function(res){
            client.get('statuses/user_timeline',options, function(error, tweets, response) {
            if (!error) {
                  //  console.log(tweets);
                    resolve(tweets);
                } else{
                //    console.log(error)
                    reject(error);
                }
            });
        }).catch(function(error){
             reject(error);
        });
    })
}
// get consumer key data from user and create a different client also add multimedia support to post status
exports.postTweet = function(req){
    //attachment_url : 'https://blog.tui.co.uk/wp-content/uploads/2016/03/ST_AUGUSTINE.png' 
    var options = { status: req.status };
    return new Promise((resolve,reject) => {
        var client = twitterClient(req);
        verifyUser(client).then(function(res){
            client.post('statuses/update',options, function(error, tweets, response) {
            if (!error) {
                    console.log(tweets);
                    resolve(tweets);
                } else{
                    console.log(error)
                    reject(error);
                }
            });
        }).catch(function(error){
             reject(error);
        });
    })
}

function verifyUser(client){
    return new Promise((resolve,reject) => {
        client.get('account/verify_credentials', function(error, tweets, response) {
        if (!error) {
                console.log('user is authenticated');
                resolve(response);
            } else{
                console.log('user is not authenticated');
                console.log(error)
                reject(error);
            }
        });
    })
}

function twitterClient(req){
    var client = new Twitter({
        consumer_key: req.consumerKey,
        consumer_secret: req.consumerSecret,
        access_token_key: req.accessToken,
        access_token_secret: req.accessTokenSecret,
        request_options: req.request_options
    });
    return client;
}
