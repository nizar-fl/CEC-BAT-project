const  express = require("express");
const router = express.Router();

const {createUserAccount,  updateUserAccount, removeUserAccount,getaccountbyrole,getaccountbyId,getaccountbyname} = require('../controllers/accountController')

router.post("/createUseraccount",createUserAccount)
router.put("/updateUseraccount/:userid",updateUserAccount)
router.delete("/deleteUseraccount/:userid",removeUserAccount)
router.get("/getaccountbyrole/:role",getaccountbyrole)
router.get("/getaccountbyId/:userid",getaccountbyId)
router.get("/getaccountbyname/:username",getaccountbyname)


 

module.exports = router;