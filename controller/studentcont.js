const  express=require("express")
const mongoose=require("mongoose")
const bcrypt = require("bcrypt");
const student = require("../model/studentSchema");
exports.suppstudent=(req,res)=>{
    mongoose.connect("mongodb+srv://azizgadacha:testtest1234@cluster0.m7cu6.mongodb.net/student?retryWrites=true&w=majority").then(
        ()=>{console.log(req.query.name)
            student.deleteOne({name:req.query.name}).then((result)=>{
            res.send(result)

        })

        }
    )
}


exports.addstudent=(req,res)=>{

    console.log( req.body)
    mongoose.connect("mongodb+srv://azizgadacha:testtest1234@cluster0.m7cu6.mongodb.net/student?retryWrites=true&w=majority").then(
        async () => {

            let cryp = await bcrypt.hash(req.body.name, 10)

            const stud = new student({name: req.body.name, password: cryp})

            stud.save().then(() => {
                console.log('student add ')
                res.send("sava mrigla ")
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error)=>console.log(error))

}

exports.verifstudent=(req,res)=>{
console.log(req.body)
    mongoose.connect("mongodb+srv://azizgadacha:testtest1234@cluster0.m7cu6.mongodb.net/student?retryWrites=true&w=majority").then(
        async () => {
            student.findOne({name:req.query.name}).then((student)=> {


                bcrypt.compare(req.query.password, student.password).then((result )=>{
                    res.send(result)


                }).catch((error)=> {
                        console.log(error)
                    }

                )
                // console.log(c)
            })
        }
    )


}