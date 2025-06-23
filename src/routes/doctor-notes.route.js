import express from "express"
import doctorNoteController from "../controllers/doctor-notes.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"


const router = express.Router()

router.post('/' ,  authCheck , doctorNoteController.createPost)

router.get('/my-notes' , (req , res)=>{
    res.json({ message : " /health-records id"})
})

router.get('/user/:userId' , (req , res)=>{
    res.json({ message : " /health-records id"})
})

router.get('/received' , (req , res)=>{
    res.json({ message : " /health-records id"})
})

router.patch('/:id' , (req , res)=>{
    res.json({ message : " register doctor"})
})

router.delete('/id:' , (req , res)=>{
    res.json({ message : " register doctor"})
})

export default router