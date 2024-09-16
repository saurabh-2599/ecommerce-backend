import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({})
import app from "./app";

(async function() {
    try{
        const dbUrl = process.env.DB_URL || `mongodb://127.0.0.1:27017/ecommerce-backend`
        await mongoose.connect(dbUrl)
        console.log("Database connection successful")
    }
    catch(err){
        console.log("Error in connection with database")
    }
})();


app.listen(process.env.PORT || 8000,function(){
    console.log("Server started at port",process.env.PORT)
})