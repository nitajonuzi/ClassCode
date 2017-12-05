var path = require('path'),//configures the path    
rootPath = path.normalize(__dirname + '/..'),    
env = process.env.NODE_ENV || 'development';

var config = {
development: {    
            root: rootPath,    
            app: {name: 'exam'},    
            port: 5000,  
            db: 'mongodb://127.0.0.1/exams-dev' 
 },  

  };

module.exports = config[env];




