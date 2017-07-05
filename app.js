const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mustacheExpress = require('mustache-express');



app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use (function(req, res, next){
  MongoClient.client('mongodb://locoalhost:27017/timKBdb', (error, db)=>{
    req.db = db;
    next();
  })
})
app.get('/directory', roboController.directory);
app.get('/directory/:id', roboController.profile);
app.get('/directory/working', roboController.working);
app.get('/directory/unemployed', roboController.unemployed);

app.listen(3000, function(){
  console.log('This is my directory!!');
});
