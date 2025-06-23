import express from "express"
import meController from "../controllers/me.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"


const router = express.Router()

router.get('/me' ,authCheck, meController.getMeUser)

router.patch('/me' , (req , res)=>{
    res.json({ message : " register doctor"})
})


export default router