const mongoose = require('mongoose')

const constructionSiteSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    clientName:{
        type:String,
        required:true
    },
    
    location: {
        type: String,
        required: true,
    },
    startingDate:{
        type:Date,
        default:Date.now
    },
    Images:[
        {
        type:String
        
    }
]

})

module.exports = mongoose.model("constructionSite", constructionSiteSchema);