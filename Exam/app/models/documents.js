var Mongoose = require('mongoose'); //this is where the schema is created for mongoose
var Schema = Mongoose.Schema;

var documentSchema = new Schema({ //this is where you're placing your schema fields

    property1: { type: String, required: true }, // property 1 required
    property2: {type: Number, required: true }, //propert 2 is required

    
});

module.exports = 
 Mongoose.model('documents', documentSchema); //this is where the module exports


