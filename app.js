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
app.get('/directory/unemployed', roboController.unemployed);
app.get('/directory/working', roboController.working)
// app.get('/directory/:id', roboController.profile);
// app.get('/directory/working', roboController.working);
// app.get('/directory/unemployed', roboController.unemployed);

app.listen(3000);
