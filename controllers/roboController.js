const Data = require('./datascript');

module.exports = {
  directory: function(req, res, next){
    const context = {};
    MongoClient.connect('mondgodb://localhost:27017/timKBdb', (errors. db)=>{
      const robots = req.db.collection('robots');
      robots.find({}).toArray((error, results)=>{
        context.model = results;
        res.render('directory', context);
      })
    })

  },

  profile: function(req, res){

    var user = req.params.id;
    const profile = Data.findOne(user);
    res.render('profile', {model: profile});
  }
};
