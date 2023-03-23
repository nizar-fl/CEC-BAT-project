const  express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin")
const {addWorker,getAllWorkers,getWorkerById,getWorkerByName,getWorkersByJob} = require('../controllers/workersController');
const isAuth = require("../middlewares/isAuth");

router.post("/addWorker",isAuth,isAdmin,addWorker)
router.get("/getAllWorkers",isAuth,getAllWorkers)
router.get("/getWorkerById/:workerid",isAuth,getWorkerById)
router.get("/getWorkerByName/:workername",isAuth,getWorkerByName)
router.get("/getWorkersByJob/:job",isAuth,getWorkersByJob)

 







module.exports = router;