const  express=require("express")
const studentcont = require("../controller/studentcont");

const router=express.Router()


router.get("/sup",studentcont.suppstudent)
router.post("/aj",studentcont.addstudent)
router.get("/verif",studentcont.verifstudent)

module.exports=router