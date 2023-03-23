const  express = require("express");
const router = express.Router();

const {login,createUserAccount,  updateUserAccount, removeUserAccount,getaccountbyrole,getaccountbyId,getaccountbyname} = require('../controllers/accountController')
const isAdmin = require("../middlewares/isAdmin")


router.post("/login",login)
router.post("/createUseraccount",isAdmin,createUserAccount)
router.put("/updateUseraccount/:userid",isAdmin,updateUserAccount)
router.delete("/deleteUseraccount/:userid",isAdmin,removeUserAccount)
router.get("/getaccountbyrole/:role",isAdmin,getaccountbyrole)
router.get("/getaccountbyId/:userid",isAdmin,getaccountbyId)
router.get("/getaccountbyname/:username",isAdmin,getaccountbyname)


 

module.exports = router;