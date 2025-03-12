// create module type server
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userModel from "./models/userModel.js"
import userRouter from "./routes/userRoute.js"
import mongoose from "mongoose"

// .ens sopert in server file
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())


// db connection
connectDB();

// api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
  res.send("API Working")
})


// to run express server

app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`)
})


