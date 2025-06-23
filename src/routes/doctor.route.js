import express from "express"


const router = express.Router()

router.get('/me' , (req , res)=>{
    res.json({ message : " doctor me"})
})

router.patch('/me' , (req , res)=>{
    res.json({ message : " register doctor"})
})


export default router