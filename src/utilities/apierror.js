class Apierror extends Error {
    constructor(
        message='Internal Server Error', 
        statusCode,
        errors=[],
        stack=''
    ){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.data = null;
        this.success = false;
        this.message = message;
        if(stack){
            this.stack = stack;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
}
}
export  {Apierror};
// Explanation:
// - This is a custom error class that extends the built-in Error class.
// - It takes four arguments: message, statusCode, errors, and stack.
// - The message argument is set to 'Internal Server Error' by default.
// - The statusCode argument is used to set the status code of the error response.
// - The errors argument is an array that contains additional error messages.
// - The stack argument is used to set the stack trace of the error.
// - It sets the statusCode, errors, data, success, and message properties of the error object.
// - It captures the stack trace if the stack argument is not provided.
// - This class is used to create custom error objects with additional properties like statusCode, errors, data, and success.
// - It is used to handle errors in the application and send appropriate error responses to the client.
// - It simplifies error handling by providing a consistent way to create error objects with custom properties.
// - It is used in the error handling middleware to create error objects and send error responses to the client.
//sample usage
// import Apierror from './apierror.js';
// app.get('/', (req, res, next) => {
//     try {
//         // some code that may throw an error
//         throw new Error('Something went wrong');
//     } catch (error) {
//         next(new Apierror('Internal Server Error', 500, [error.message], error.stack));
//     }
// });
// app.use((error, req, res, next) => {
//     res.status(error.statusCode || 500).json({
//         success: false,
//         message: error.message,
//         errors: error.errors,
//         data: error.data
//     });
// });
// - This example demonstrates how to use the Apierror class to create custom error objects with additional properties.
// - It shows how to handle errors in the application and send appropriate error responses to the client.
// - It uses the Apierror class to create an error object with a status code, error messages, and stack trace.
// - The error handling middleware catches the error and sends a JSON response with the error details.
// - This class simplifies error handling by providing a consistent way to create error objects with custom properties.
// - It is a common practice to use this class in express applications to handle errors and send error responses to the client.
// - It improves the error handling process by providing a structured way to create and handle errors in the application.
// - It is recommended to use this class in express applications to create custom error objects and handle errors effectively.
// - It is a best practice to use this class in express applications to simplify error handling and improve the error response mechanism.
// - It is a good practice to use this class in express applications to create custom error objects and provide detailed error messages to the client.
// - It is a useful tool for handling errors in express applications and sending appropriate error responses to the client.
// - It is a reliable way to handle errors in express applications and improve the error handling process.
// - It is a powerful feature of express applications that helps in creating custom error objects and handling errors effectively.
