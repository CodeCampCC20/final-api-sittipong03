import express from "express"
import { authCheck } from "../middlewares/authen.middleware.js"
import healthRecordController from "../controllers/health-records.controller.js"


const router = express.Router()

router.post('/' , authCheck , healthRecordController.createPost)

router.get('/' , authCheck , healthRecordController.listPost)

router.get('/:id' ,authCheck , healthRecordController.listUserPost)

router.patch('/:id' ,authCheck , healthRecordController.updateUserPost)

router.delete('/:id' ,authCheck , healthRecordController.deleteUserPost)

export default router