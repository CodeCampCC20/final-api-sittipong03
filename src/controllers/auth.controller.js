import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/create-error.utils.js";

const authController = {}

authController.doctorRegister = async (req, res , next) => {
    try {
    const { password, username , specialization } = req.body
    const user = await prisma.doctor.findFirst({
        where:{ username : username }
    })
    // console.log(user)
    if(user){
        createError(400 , 'Username is exist')
    }
    const hashPassword = bcrypt.hashSync(password , 10)

    const result = await prisma.doctor.create({
        data : { 
            username : username,
            password : hashPassword,
            specialization : specialization

        }

    })
    
    res.json({message : "Register doctor Successfully"})
    } catch (error) {
        next(error)
    }

}


authController.userRegister = async (req, res , next) => {
    try {
    const { password, username } = req.body
    const user = await prisma.user.findFirst({
        where:{ username : username }
    })
    if(user){
        // console.log("has user jaaa")
        createError(400 , 'Username is exist')
    }
    const hashPassword = bcrypt.hashSync(password , 10)

    const result = await prisma.user.create({
        data : { 
            username : username,
            password : hashPassword,
        }

    })
    
    res.json({message : "Register User Successfully"})
    } catch (error) {
        next(error)
    }

}


authController.doctorLogin = async(req ,res ,next)=>{
    try {
        const {username , password} = req.body
        const user = await prisma.doctor.findFirst({
        where:{ username : username,
         }
    })
    // console.log(user)
    if(!user){
        createError(400 , "Email or Password is Invalid!!!")
    }
    const checkPassword = bcrypt.compareSync(password ,user.password)
    if(!checkPassword){
        createError(400 , "Email or Password is Invalid!!!")
    }

    const payload = {
        id : user.id,
        username : user.username,
        specialization : user.specialization,
    }
    // console.log(payload)
    const token = jwt.sign(payload , process.env.SECRET_KEY , { algorithm : "HS256" ,expiresIn : "1d"} )
    res.json({
        id : user.id,
        username : user.username,
        specialization : user.specialization,
        token : token
    })

    } catch (error) {
        next(error)
        
    }

}

authController.userLogin = async(req ,res ,next)=>{
    try {
        const {username , password} = req.body
        const user = await prisma.user.findFirst({
        where:{ username : username,
         }
    })
    console.log(user)
    if(!user){
        createError(400 , "Email or Password is Invalid!!!")
    }
    const checkPassword = bcrypt.compareSync(password ,user.password)
    if(!checkPassword){
        createError(400 , "Email or Password is Invalid!!!")
    }

    const payload = {
        id : user.id,
        username : user.username,
    }
    // console.log(payload)
    const token = jwt.sign(payload , process.env.SECRET_KEY , { algorithm : "HS256" ,expiresIn : "1h"} )
    res.json({
        id : user.id,
        username : user.username,
        token : token
    })

    } catch (error) {
        next(error)
        
    }

}



export default authController