const  express = require("express");
const router = express.Router();

const {addWorker,getAllWorkers,getWorkerById,getWorkerByName,getWorkersByJob} = require('../controllers/workersController')

router.post("/addWorker",addWorker)
router.get("/getAllWorkers",getAllWorkers)
router.get("/getWorkerById/:workerid",getWorkerById)
router.get("/getWorkerByName/:workername",getWorkerByName)
router.get("/getWorkersByJob/:job",getWorkersByJob)

 







module.exports = router;