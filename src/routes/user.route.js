import express from "express"
import meController from "../controllers/me.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"


const router = express.Router()

router.get('/me' ,authCheck, meController.getMeUser)

router.patch('/me' , authCheck ,meController.patchMeUser)


export default router