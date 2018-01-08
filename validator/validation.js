exports.isValidGetTweet = function(req){
    if(!req.screenName){
        return 'Screen Name required';
    } else{
        return;
    }
}

exports.isValidToPost = function(req){
    if(!req.consumerKey){
        return 'ConsumerKey required';
    } else if(!req.consumerSecret){
        return 'consumerSecret required';
    } else if(!req.accessToken){
        return 'accessToken required';
    } else if(!req.accessTokenSecret){
        return 'accessTokenSecret required';
    } else if(!req.request_options){
        return 'request_options for proxy is required';
    } else if(!req.status){
        return 'status text to post your tweet is required';
    } else{
        return;
    }
}