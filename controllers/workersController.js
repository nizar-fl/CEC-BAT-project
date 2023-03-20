const Worker = require("../models/workerSchema")


const addWorker = async (req,res)=>{
    const { identityCardId } = req.body;
    try {
        const findWorker = await Worker.findOne({identityCardId})
        if (findWorker){
            return res.status(400).json({msg:"the worker already exists"})
        }
        const newWorker = new Worker({...req.body})
        await newWorker.save()
        res.status(201).json({msg:'worker profile created successfully'})
        
        
        
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
const getAllWorkers = async(req,res)=>{
    try {
        const workers = await Worker.find({});
        res.status(200).json(workers)
        
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
const getWorkerById = async(req,res)=>{
    const workerid = req.params.workerid
    try {
        
        const worker = await Worker.findById(workerid)
        console.log(worker)
        if (!worker){
            return res.status(404).json({msg:"User Not found or the some informations are missing"})
        }
        res.status(200).json(worker)
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
const getWorkerByName= async(req,res)=>{
    const workername = req.params.workername
    try {
       const findWorkers = await Worker.find({
        $or: [
          { firstName: { $regex: workername, $options: 'i' } },
          { lastName: { $regex: workername, $options: 'i' } }
        ]
      }) 
       if(!findWorkers){
         return res.status(404).json({msg:"User Not found or the some informations are missing"})
       }
       res.status(200).json(findWorkers)

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
const getWorkersByJob= async(req,res)=>{
    const job = req.params.job
    try {
        const findworkers = await Worker.find({
          job :{$regex:job}   
        })
        if(!findworkers){
            return res.status(404).json({msg:"User Not found or the some informations are missing"})
        }
        res.status(200).json(findworkers)
        
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
module.exports = {
    addWorker,
    getAllWorkers,
    getWorkerById,
    getWorkerByName,
    getWorkersByJob
  };