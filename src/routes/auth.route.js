import express from "express"
import authController from "../controllers/auth.controller.js"



const router = express.Router()

router.post('/register/doctor' , authController.doctorRegister)
router.post('/register/user' , authController.userRegister)
router.post('/login/doctor' , authController.doctorLogin)
router.post('/login/user' , authController.userLogin)



export default router