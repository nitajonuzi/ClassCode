//the controller folder contains routes
var express = require('express'),
router = express.Router(), //router object manages routes
mongoose = require('mongoose'),
Newdoc = mongoose.model('documents');




module.exports = function (app, config) { //creates exportable module
  app.use('/api', router);//declare the router as express middlewear and set default url prefix to /api
  
 
  router.get('/documents', function (req, res, next){//logs the route for debugging purposes
      
  console.log('Get all documents', 'verbose');
      
  var query = Newdoc.find().then(result => {
      
  if(result && result.length) {
      
  res.status(200).json(result);//results are correct/no error found
      
  } else {
      
  res.status(404).json({message: "No documents"}); //error handler
      
  }
      
  })
      
  .catch(err => {
      
  return next(err);
      
  });
      
  });




  router.post('/documents', function(req, res, next){
      console.log('Create document'  , 'verbose');
      var newdoc = new Newdoc(req.body);
      newdoc.save()
      .then(result => {
          res.status(201).json(result);
      })
      .catch( err => {
         return next(err);
      });
    });



};
