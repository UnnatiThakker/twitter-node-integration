Instructions

1. To get tweets use '/tweets/:screenName' get API where screenName is your Twitter Username

2. To post tweet use '/posttweet' post API where parameters are as below :
    - consumerKey
    - consumerSecret
    - accessToken
    - accessTokenSecret
    - request_options
    - status
    where status is which message you want to post as your tweet.

3. Also add below values to config.json file inorder to use API endpoints :
    - consumerKey
    - consumerSecret
    - accessToken
    - accessTokenSecret
    - request_options

4. The format for -request_options is :
    request_options : {
        proxy : "www.proxy.com" // provide proxy server if any
    }           