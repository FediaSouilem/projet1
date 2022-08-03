const mongoose = require ('mongoose');

const projectSchema = mongoose.Schema({
    Title:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true,
        unique: true
    },
     image:{
         data:Buffer,
        contentType: String,
        // required:true
    },
    
});

module.exports = mongoose.model('project', projectSchema);