import { object, ref, Schema, string } from "yup"




export const registerUserSchema = object({
    username: string().min(3, "name มากกว่า 3 ตัว").required("please enter name"),
    password: string().min(6, "password มากกว่า 6 ตัว"),
    confirmPassword: string().oneOf([ref("password"), null], "password ไม่ตรงกัน")
})

export const registerDoctorSchema = object({
    username: string().min(3, "name มากกว่า 3 ตัว").required("please enter name"),
    password: string().min(6, "password มากกว่า 6 ตัว"),
    specialization: string().min(3 ,"มากกว่า 3 ตัว").required("โปรดระบุบ ตำแหน่ง") ,
    confirmPassword: string().oneOf([ref("password"), null], "password ไม่ตรงกัน")
})

export const validate = (schema)=> async(req , res , next) =>{
    try {
        
        await schema.validate(req.body,{abortEarly : false})
        next()
    } catch (error) {
        console.log(error)
        next(error)
        
    }
}