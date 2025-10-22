import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//-----------BELOW ALL ARE ETHE CONFIG OF SERVER FOR DATA GETTING---------------------------------------------
const app = express();
app.use(cors({
    origin: process.env.CORS_ORGIN,
    credentials: true,
}))
// GET THE DATA FROM THE JSON FILE OR GETTING THE RESPONSE IN JSON
app.use(express.json({limit: "16kb"}))

//USED TO GET THE DATA FROM THE URL 
app.use(express.urlencoded({extended: true,limit: "16kb"}))
//TO SET THE COOKIES OF THE USER AND TO GET THE COOKIE DATA OF THE USER

app.use(cookieParser())
export {app};