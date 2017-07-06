
const MongoClient = require('mongodb').MongoClient;
const data = require('./data');

MongoClient.connect('mongodb://localhost:27017/timRobots_db', (error, db)=>{

  var col = db.collection("robots");
  data.users.forEach((user)=>{
    col.insert(user);
// console.log("user");
  });
});
