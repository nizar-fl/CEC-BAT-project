const  express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin")
const {addconstructionSite,updateconstructionSite, removeconstructionSite ,constructionsite} = require('../controllers/constructionSiteController')

router.post("/addconstructionSite",isAdmin,addconstructionSite)
router.get("/getallconstructionsites",constructionsite)
router.put("/updateconstructionSite/:constructionsiteid",isAdmin,updateconstructionSite)
router.delete("/deleteconstructionSite/:constructionsiteid",isAdmin,removeconstructionSite)



module.exports = router;