const express=require("express")
const router=express.Router()
const  formcont=require("../controller/formcont")

router.get( "/ajout",formcont.afficheformpost)

router.get( "/verifier",formcont.afficheformget)
router.get( "/supprimer",formcont.affsup)

module.exports=router