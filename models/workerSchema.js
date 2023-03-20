const mongoose = require("mongoose")

const workerSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    SelfImage:{
        type:String,
        required:false,
        default: "https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
    },
    birthdate:{
        type:Date,
        required:false
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    identityCardId:{
        type:Number,
        required: true,
        unique: true,
    }
})


module.exports = mongoose.model("Worker", workerSchema);