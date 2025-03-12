import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://ajeetkumar4035:Khushi7783@cluster0.j55ku.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
