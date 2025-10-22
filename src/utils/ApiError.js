class ApiError extends Error{
    constructor(
        statusCode,
        message ="Something Went Wrong",
        stack = "",
        errors =[]
    ){
        super(message),
        this.statusCode = statusCode
        this.data= null
        this.message= message
        this.success= false
        this.errors=errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureS6tackTrace(this,this.constructor)
        }

    }
}  

export {ApiError}
/// THIS CLASS GIVVES STRUCTURE TO THE ERRO RECIEVED WHEN HITTING AN API