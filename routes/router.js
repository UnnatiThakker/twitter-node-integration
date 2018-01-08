var express = require('express');
var router = express.Router();
var passportTwitter = require('../auth/passport');
var twitterRoute = require('./twitterRoute');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept, appVersion");
  res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
  next();
});

router.get('/test', function (req, res) {
  res.json("apps api works!!")
});

router.get('/favouriteList/:screenName', twitterRoute.getFavouriteLists);
router.get('/tweets/:screenName', twitterRoute.getTweets);
router.post('/posttweet', twitterRoute.postTweet);

router.get('/', (req, res) => res.render('index.html'))
// router.get('/auth/twitter', passportTwitter.authenticate('twitter'));
// router.get('/auth/twitter/callback',
//   passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication
//     res.json(req.user);
//   });

module.exports = router;