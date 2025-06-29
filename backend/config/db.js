import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhaykishor14:test123456@cluster0.bwbfhes.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}