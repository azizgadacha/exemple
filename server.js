const express=require("express")
const app=express()

const formroute=require("./route/formroute")
const studentroute  =require("./route/studentroute")


app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use("/",formroute)
app.use("/",studentroute)


app.listen(3000)