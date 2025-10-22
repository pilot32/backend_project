import mongoose , {schema} from "mongoose";

const userSchema = new schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: true,//fro the properyt of finding the dta in the database ike an array
    },
     email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: true,//fro the properyt of finding the dta in the database ike an array
    }, 
    fullname: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: true,//fro the properyt of finding the dta in the database ike an array
    },
    avatar: {
        type: String,//cloudinary URL
        unique: true,
        required: true,
        
    },
    coverImage: {
        type: String,//cloudinary URL
        },
    watchHistory: [

        
    ],
    
    
    
    
    
    
    
    
    
    
    
    
    
})


export const User = mongoose.model("User", userSchema)