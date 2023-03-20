const  express = require("express");
const router = express.Router();

const {addconstructionSite,updateconstructionSite, removeconstructionSite} = require('../controllers/constructionSiteController')

router.post("/addconstructionSite",addconstructionSite)
router.put("/updateconstructionSite/:constructionsiteid",updateconstructionSite)
router.delete("/deleteconstructionSite/:constructionsiteid",removeconstructionSite)



module.exports = router;