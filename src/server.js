import express, { json } from "express"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import doctorRouter from "./routes/doctor.route.js"
// import healthRouter from "./routes/health-records.route.js"

import notFound from "./utils/not-found.utils.js"
import error from "./utils/error-handle.utils.js"
import morgan from "morgan"


const PORT = 3000
const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use("/auth" , authRouter)

app.use("/users", userRouter)

app.use("/doctors" , doctorRouter)

// app.use("/health-records" , healthRouter)

app.use("/doctor-notes" , (req , res)=>{
    res.json({ message : "doctor-notes"})
})

app.use(error)
app.use(notFound)


app.listen(PORT , ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})