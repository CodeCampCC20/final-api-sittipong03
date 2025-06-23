import express from "express"
import authController from "../controllers/auth.controller.js"
import { validate ,registerDoctorSchema ,registerUserSchema  } from "../middlewares/validate.middleware.js"



const router = express.Router()

router.post('/register/doctor' , validate(registerDoctorSchema),authController.doctorRegister)
router.post('/register/user' , validate(registerUserSchema) ,authController.userRegister)
router.post('/login/doctor' , authController.doctorLogin)
router.post('/login/user' , authController.userLogin)



export default router