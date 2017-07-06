const MongoClient = require('mongodb').MongoClient;
const data = require('../data');

module.exports = {

  directory: function(req, res){
    var context = {};

    var col = req.db.collection('robots');

    col.find({}).toArray((error, results)=>{
      console.log(results);
      context.model = results;
      res.render('directory', context);
    })


  },

  profile: function(req, res){
    var context ={};
    var user = req.params.id;
    user = Number(user);
    var col = req.db.collection('robots')
    col.find({"id": user}).toArray((error, results)=>{
      context.model = results
      res.render('profile', context);
    });

  },
  unemployed: function(req, res){
    var context = {};
    var col = req.db.collection('robots')
    col.find({'job': null}).toArray((error, results)=>{
      console.log("unemployeeeeeeeeed", results);
      context.model = results
      res.render('unemployed', context);
    })

  },
  working: function(req, res){
    var context = {};
    var col = req.db.collection('robots')
    col.find({'company': {$ne: null}}).toArray((error, results)=>{
      context.model = results
      res.render('working', context);
    })
  }
};
