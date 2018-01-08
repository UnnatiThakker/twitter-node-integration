var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;


    passport.use(new Strategy({
        consumerKey: '1Wtfpl8F0QsgRsVaJmPaRrEZ5',
        consumerSecret: 'b422MZ986vdYi1DlihPMvUBtWq8JnwTYnkUglXU6yCKybk9nip',
        callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
        request_options: {
            proxy: 'http://webproxy.merck.com:8080'
        }
    },
    function(token, tokenSecret, profile, cb) {
        try {
        console.log(token);
        console.log(tokenSecret);
        } catch(e){
            console.log('in error')
            console.log(e);
        }
        // In this example, the user's Twitter profile is supplied as the user
        // record.  In a production-quality application, the Twitter profile should
        // be associated with a user record in the application's database, which
        // allows for account linking and authentication with other identity
        // providers.
        return cb(null, profile);
    }));

    passport.serializeUser(function(user, cb) {
    cb(null, user);
    });

    passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
    });
module.exports = passport;