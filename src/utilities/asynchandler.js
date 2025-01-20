const asynchandler =(fn)=>{
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err)=>next(err));
    };
}
export {asynchandler};
/*
    // Explanation: 
    - This is a middleware function which takes a function as an argument.
    - It returns a function which takes three arguments req, res, next.
    - It calls the function with req, res, next and wraps it in a Promise.resolve.
    - If the function throws an error, it will be caught by the catch block and passed to the next middleware.
    - This is useful for handling asynchronous code in express routes.
    - It is used to avoid writing try-catch blocks in every route handler.
    - It is used in the routes to handle the asynchronous code.
    - It is used to handle the errors in the asynchronous code.
*/
// Example Usage:
// import express from 'express';
// import asynchandler from './asynchandler.js';
// const app = express();
// app.get('/', asynchandler(async (req, res) => {
//     const data = await fetchData();  // asynchronous code
//     res.send(data);  // sending response
// })); 
// app.use((error, req, res, next) => {
//     res.status(500).send({message: error.message});
// });
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// Note: This is a simple example to demonstrate the usage of asynchandler middleware. The actual usage may vary depending on the requirements.
// The above example demonstrates how to use the asynchandler middleware in an express application to handle asynchronous code in route handlers.
// It helps to avoid writing try-catch blocks in every route handler and provides a cleaner way to handle asynchronous code.
// It is used to handle errors in asynchronous code and pass them to the error handling middleware.
// The error handling middleware can then send an appropriate response to the client based on the error.
// This middleware is useful for handling asynchronous code in express routes and simplifies error handling in route handlers.
// It is a common practice to use this middleware in express applications to handle asynchronous code and errors in route handlers.
// It improves the readability and maintainability of the code by separating the error handling logic from the route handlers.
// It is recommended to use this middleware in express applications to handle asynchronous code and errors effectively.
// It is a best practice to use this middleware in express applications to handle asynchronous code and errors in a clean and efficient way.

