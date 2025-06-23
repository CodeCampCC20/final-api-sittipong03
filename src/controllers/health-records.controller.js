import { createError } from "../utils/create-error.utils.js";
import { authCheck } from "../middlewares/authen.middleware.js";
import prisma from "../config/prisma.js";
import { number } from "yup";
import { format } from "morgan";

const healthRecordController = {}

healthRecordController.createPost = async (req , res , next)=>{
    try {
        const body = req.body
        const id = req.data.id
    if(!body){
        createError(400 , "bad request")
    }     
       const result  = await prisma.healthRecord.create({
        data : {
            type : body.type,
            value : body.value,
            userId : id
        }
       })
       res.json({ message : "create health record successfully"})
    } catch (error) {
        next (error)
    }
}

healthRecordController.listPost = async (req , res , next)=>{
    try {
        const id = req.data.id
        const from = req.query.from
        const to = req.query.to
        const result = await prisma.healthRecord.findMany({
            where :{
                userId : Number(id),
                date: {
                    lte : new Date(to),
                    gte: new Date(from)
                }
            }
        })
        res.json({result})

    } catch (error) {
        next(error)
    }
}

healthRecordController.listUserPost = async (req , res , next)=>{
    try {
        const id = req.params.id
        const userid = req.data.id

        const user = await prisma.healthRecord.findFirst({
            where :{
                id : Number(id),
                userId : Number(userid)
            }
        })
        if(!user){
            createError(403 ,"You don't have permission to perform this action")
        }

        const result = await prisma.healthRecord.findMany({
            where :{
                id : Number(id),
            }
        })

        res.json({result})

    } catch (error) {

        next(error)
        
    }
}

healthRecordController.updateUserPost = async (req , res , next)=>{
    try {
        const id = req.params.id
        const userid = req.data.id
        const {type , value} = req.body
        const post = await prisma.healthRecord.findFirst({
            where :{
                id : Number(id) ,
                userId : Number(userid)

            }
        })
        if(!post){
            createError(403 ,"You don't have permission to perform this action")
        }
        const result = await prisma.healthRecord.update({
            where :{
                id : Number(id),
            },
            data : {
                type : type,
                value : value
            }
        })

        res.json({result})

    } catch (error) {

        next(error)
        
    }
}

healthRecordController.deleteUserPost = async (req , res , next)=>{
    try {
        const id = req.params.id
        const userid = req.data.id
        const post = await prisma.healthRecord.findFirst({
            where :{
                id : Number(id) ,
                userId : Number(userid)

            }
        })
        if(!post){
            createError(403 ,"You don't have permission to perform this action")
        }
        const result = await prisma.healthRecord.delete({
            where :{
                id : Number(id),
            }
        })

        res.json({ message : "delete complete"})

    } catch (error) {

        next(error)
        
    }
}





export default healthRecordController