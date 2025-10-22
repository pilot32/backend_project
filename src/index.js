//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import {connectDB} from "./db/index.js";

dotenv.config({
    path: './env'
})



app.on("error", ()=>{
            consol.log("error: ",error);
            throw error
        });
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`servver is runnig at ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("Mongo DB connecxtion error" , err);
})




//-------------------connectionn with database approach 1-------------------

// const app = express();  
// ;(  async ()=>{
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", ()=>{
//             consol.log("error: ",error);
//             throw error
//         });
//             app.listen(process.eenv.PORT , ()=>{
//                 console.log(`App is listening to port ${process.env.PORT}`)
//             });
//     }
//     catch(error){
//         console.error("error: ",error);
//         throw err
//     }

//     })()

//-------------------connectionn with database approach 2-------------------
//make diffferent file
