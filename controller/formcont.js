const express=require("express")
const router=express.Router()




 exports.afficheformpost=(req,res,next)=>{

    res.send("<form method='post' action='/aj' > <h1>salah</h1><input name='name' type='text'> <input name='password' type='password'> <button type='submit'  >sub</button></form>")
}
exports.afficheformget=(req,res,next)=>{

    res.send("<form method='get' action='/verif' ><h2>salah</h2> <input name='name' type='text'> <input name='password' type='password'> <button type='submit'  >sub</button></form>")
}
exports.affsup=(req,res,next)=>{

    res.send("<form method='get' action='/verif' ><h3>commit3</h3> <input name='name' type='text'> <input name='password' type='password'> <button type='submit'  >sub</button></form>")
}


