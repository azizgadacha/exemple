const  mongoose=require("mongoose")
const student = new mongoose.Schema({


    name:String,
    password:String
},)

module.exports=mongoose.model("student",student)