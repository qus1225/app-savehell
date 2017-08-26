var express = require('express');

var app =  express();

var route = require('./route.js');

var credentials = require('./credentials');

var passport = require('passport');

var session = require('express-session');

var db = require('./config/db');

var hero = require('./db/hero');
var battle = require('./db/battle');
var monster = require('./db/monster');
var victory = require('./db/victory');

hero.sync();
battle.sync();
monster.sync();
victory.sync();

// db.sync();

// Set Static Middleware
app.use(express.static(__dirname + '/public'));

app.use(require('body-parser').urlencoded({ extended: true }));

app.set('port', credentials.PORT);

// Set Handlebar ViewEngine
var handlebars = require('express-handlebars')
  .create({
    defaultLayout: 'main',
    helpers: {
      section: function (name, options) {
        if(!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      }
    }
  });
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.use(session({ secret: credentials.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/', route);

// custom 404 page
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});