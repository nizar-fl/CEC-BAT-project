const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    SelfImage:{
        type:String,
        required:false,
        default: "https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
    },
    identityCardId:{
        type:Number,
        required: true,
        unique: true,
    },
    role:{
        type:String,
        default :"appointer"
    },
    isAdmin:{
        type:Boolean,
        default:false
    }    

})
module.exports = mongoose.model("User", userSchema);