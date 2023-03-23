const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");



const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const findUser = await User.findOne({ email })
      if (!findUser) {
        return res.status(400).json({ msg: "User does not exist" })
      }
      const correctPassword = await bcrypt.compare(password, findUser.password);
      if (!correctPassword) {
        return res.status(400).json({ msg: "bad credentials" })
      }
      const token = jwt.sign({ id: findUser._id }, process.env.SECRETTOKEN, {
        expiresIn: "2d",
      })
      res.status(200).json({ msg: "Login successful", token: token,user:findUser });
  
  
  
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  
  
};

const createUserAccount = async (req,res)=>{
    const { email, newPassword,identityCardId } = req.body;
    try {
      const findUser = await User.findOne({ email })
      if (findUser) {
        return res.status(400).json({ msg: "This email is already assigned to an account" })
      }
      const findUserbyidcard = await User.findOne({ identityCardId })
      if (findUserbyidcard) {
        return res.status(400).json({ msg: "This identity Card Id is already assigned to an account" })
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const newUser = new User({ ...req.body, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ msg: "site manager account created successfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
}  
const updateUserAccount = async(req,res)=>{
  const userid = req.params.userid
  const {firstName,lastName,phoneNumber,email} = req.body
  try {
    const finduser = await User.findById(userid)
    
    if (!finduser){
      return res.status(404).json({msg:"user not found or something went wrong"})
    }
    const updateuser = await finduser.updateOne({firstName,lastName,phoneNumber,email})
    if (!updateuser.acknowledged){
      return res.status(400).json({msg:"something went worng or some information are missing"})
    }
    res.status(200).json({msg:"Site manager account updated successfully"})
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
const removeUserAccount = async(req,res)=>{
  const Userid = req.params.userid
  try {
    const findUser = await User.findById(Userid)
    
    if (!findUser){
      return res.status(404).json({msg:"user not found or something went wrong"})
    }
    const deleteUser = await User.deleteOne({_id:Userid})
    if (!deleteUser.acknowledged){
      return res.status(400).json({msg:"something went worng"})
    }
    res.status(200).json({msg:"user account deleted successfully"})
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
const getaccountbyrole = async(req,res)=>{
  const {role} = req.params
  try {
    const findbyrole= await User.find({role})
    if(!findbyrole){
      return res.status(404).json({msg:`the user with ${role} job does not exist`})
    }
    res.status(200).json(findbyrole)
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
const getaccountbyId = async(req,res)=>{
    const {userid} = req.params
    try {
      const findUserById = await User.findById(userid)
      if(!findUserById){
        return res.status(404).json({msg:`the user with this id does not exist`})
      }
      res.status(200).json(findUserById)
      
    } catch (error) {
      return res.status(500).json({ msg: error.message + "    or this id may be invalid"});
    }
}
const getaccountbyname = async(req,res)=>{
  const {username} = req.params
    try {
       const findUser = await User.find({
        $or: [
          { firstName: { $regex: username, $options: 'i' } },
          { lastName: { $regex: username, $options: 'i' } }
        ]
      }) 
       if(!findUser){
         return res.status(404).json({msg:"User Not found or the some informations are missing"})
       }
       res.status(200).json(findUser)

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}



  module.exports = {
    login,
    createUserAccount,
    updateUserAccount,
    removeUserAccount,
    getaccountbyrole,
    getaccountbyId,
    getaccountbyname
  };