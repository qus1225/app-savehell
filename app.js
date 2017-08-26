var express = require('express');

var app =  express();

var mysql = require('mysql');
var dbconfig = require('./config/db');
var connection = mysql.createConnection(dbconfig);

// Set Static Middleware
app.use(express.static(__dirname + '/public'));

app.use(require('body-parser').urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8080);

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

// Routes
app
  .get('/', function (req, res) {
    res.render('home');
  })
  .get('/test_data', function (req, res) {
    connection.query('SELECT * from Persons', function(err, rows, fields) {
      if (err) throw err;
      console.log('The solution is: ', rows);
      res.send(rows);
    });
  })
;

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