const constructionSite = require("../models/constructionSiteSchema")



const addconstructionSite = async(req,res)=>{
    const {name} = req.body
    try {
        const findSite = await constructionSite.findOne({name: name})
        
        if (findSite){
            return res.status(400).json({msg:"construction site is already added or the exact name is already in use"})
        }
        const newsite = new constructionSite({...req.body})
        const sitecreation = await newsite.save()
        
        if(!sitecreation){
            return res.status(400).json({msg:"something went worng"})
        }
        res.status(200).json({msg:"construction Sites added successfully"})
        
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
const updateconstructionSite  = async(req,res)=>{
    const constructionSiteid  = req.params.constructionsiteid 
    
    try {
        const findSite = await constructionSite.findById(constructionSiteid)
        if (!findSite){
            res.status(400).json({msg:"construction site does not exist"})
        }
      const updatesite = await findSite.updateOne({...req.body})
      console.log(updatesite)
      if (!updatesite.acknowledged){
        return res.status(400).json({msg:"something went worng or some information are missing"})
      }
      res.status(200).json({msg:"construction site updated successfully"})
      
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
}
const removeconstructionSite = async(req,res)=>{
    const constructionSiteid  = req.params.constructionsiteid 
    try {
        const findSite = await constructionSite.findById(constructionSiteid)
        if (!findSite){
            return res.status(400).json({msg:"construction site does not exist"})
        }
      const updatsite = await findSite.deleteOne({_id:constructionSiteid})
      if (!updatsite){
        return res.status(400).json({msg:"something went worng or some information are missing"})
      }
      res.status(200).json({msg:"construction site deleted successfully"})
      
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
const constructionsite = async(req,res)=>{
  try {
    const constructionsites = await constructionSite.find()
    if(!constructionsites){
      return res.status(401).json({msg:"something went wrong"})
    }
    res.status(200).json(constructionsites)
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

  module.exports = {
    addconstructionSite,
    updateconstructionSite,
    removeconstructionSite,
    constructionsite
  };