import express from "express"
import meController from "../controllers/me.controller.js"
import { authCheck } from "../middlewares/authen.middleware.js"


const router = express.Router()

router.get('/me' , authCheck , meController.getMeDoctor)

router.patch('/me' , authCheck , meController.patchMeDoctor)


export default router