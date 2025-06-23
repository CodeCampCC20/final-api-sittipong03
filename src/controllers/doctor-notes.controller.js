import { createError } from "../utils/create-error.utils.js";
import prisma from "../config/prisma.js";

const doctorNoteController = {}

doctorNoteController.createPost = async (req , res , next)=>{
    try {
        const body = req.body
        const id = req.data.id
    if(!body){
        createError(400 , "bad request")
    }     
       const result  = await prisma.doctorNote.create({
        data : {
            userId : body.userId,
            note : body.note,
            doctorId : id
        }
       })
       res.json({ message : "create doctor notes successfully"})
    } catch (error) {
        next (error)
    }
}

export default doctorNoteController