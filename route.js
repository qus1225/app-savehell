var express = require('express');
var router = express.Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var credentials = require('./credentials');
var hero = require('./db/hero');
var heroModel = require('./model/heromodel');

passport.serializeUser(function(user, done) {
  console.log('serialize');
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  //findById(id, function (err, user) {
  console.log('deserialize');
  done(null, user);
  //});
});

passport.use(new FacebookStrategy({
    clientID: credentials.FACEBOOK_APP_ID,
    clientSecret: credentials.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
    passReqToCallback: true,
    profileFields: ['id', 'email', 'name']
  },
  function(req, accessToken, refreshToken, profile, done) {
    console.log('email: '+ profile.emails[0].value);
    console.log('provider: '+ profile.provider);
    console.log('name: '+ profile.name.givenName);

    // return done(null, profile);

    hero.findOne({ where: {provider_user_id: profile.id, provider: profile.provider} }).then(hero => {
      // project will be the first entry of the Projects table with the title 'aProject' || null
      if (hero) {
        return done(null, hero);
      }
      var results = heroModel.api.insertHero({provider_user_id: profile.id, provider: profile.provider, email: profile.emails[0].value, nickName: profile.name.givenName}, function (results) {
        return done(null, results);
      });
    });
  }
));

router
  .get('/', function (req, res) {
    res.render('home');
  })
;

router.get('/auth/facebook', passport.authenticate('facebook', {
  authType: 'rerequest', scope: ['public_profile', 'email']
}));

router
  .get('/auth/facebook', passport.authenticate('facebook', {
    authType: 'rerequest', scope: ['public_profile', 'email']
  }))
  .get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/login_success',
    failureRedirect: '/login_fail' }))
  .get('/login_success', ensureAuthenticated, function(req, res){
    res.send(req.user);
    // res.send(req.user);
  })
  .get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

function ensureAuthenticated(req, res, next) {
  // 로그인이 되어 있으면, 다음 파이프라인으로 진행
  if (req.isAuthenticated()) { return next(); }
  // 로그인이 안되어 있으면, login 페이지로 진행
  res.redirect('/');
}

module.exports = router;