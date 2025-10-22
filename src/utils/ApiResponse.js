class ApiReesponse{
    constructor(statusCode,data,meessage="Success"){
        this.statusCode=statusCode,
        this.data=data;
        this.message=message,
        this.success=statusCode<400
    }
}