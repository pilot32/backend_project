//const asyncHandler =() =>{}

export {asyncHandler}

// const asyncHandler = () =>{}
// const asyncHandler = (func) => () =>{}
// const asyncHandler = (func) => async () =>{}

    //---------------------------------------------approach 1 --------------------------using try catch-------------------------
// const asyncHnalder= (fn)=> async (req,res, next) =>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code || 500).json({

//             success: false,
//             message: err.message
//         })
//     }   

// }
//-------------approiach 2------------------promise meethod



const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}