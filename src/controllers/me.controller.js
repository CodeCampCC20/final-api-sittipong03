import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/create-error.utils.js";

const meController = {}

meController.getMeUser = async (req, res , next)=>{
    try {
        // console.log("out herer pass middleware")
        const id = req.body.id
        // console.log(id)
        const result = await prisma.user.findFirst({
            where : {id : Number(id)}
        })
        res.json({id : result.id , username : result.username })

        

        
    } catch (error) {
        next(error)
        
    }

}

export default meController