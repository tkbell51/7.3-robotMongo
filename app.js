const express = require('express');
const mustacheExpress = require('mustache-express');
const datascript = require('./datascript');
const roboController = require('./controllers/roboController');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');


app.use(function(req, res, next){
  MongoClient.connect('mongodb://localhost:27017/timRobots_db', (errors, db)=>{
    req.db = db;
    next();
  })
})


app.get('/directory', roboController.directory);
app.get('/directory/:id', roboController.profile);
app.get('/unemployed/', roboController.unemployed);//----/directory/unemployed/ path would not work
app.get('/working/', roboController.working);//--/directory/working/ path would not work


app.listen(3000);
