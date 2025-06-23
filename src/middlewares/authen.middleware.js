import { createError } from "../utils/create-error.utils.js";
import jwt from "jsonwebtoken"

export const authCheck = (req , res , next)=>{
    try {
        const header = req.headers.authorization
        console.log(header)
        if(!header){
            createError(401 , "Unauthorization")
        }
        const token = header.split(" ")[1]
        console.log(token)
        const payload = jwt.verify( token , process.env.SECRET_KEY , {algorithms : "HS256"})
        req.body = payload
        next()

        


    } catch (error) {
        next(error)
        
    }
    
}
