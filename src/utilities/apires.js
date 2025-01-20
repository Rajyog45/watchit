class Apires {
    constructor(statusCode,data,message='success'){
        this.statusCode = statusCode;
        this.data = data;
        this.message =message;
        this.success = true;

    }
}
export {Apires};
// Explanation:
// - This is a custom response class that represents a successful response.
// - It takes three arguments: message, statusCode, and data.
// - The message argument is set to 'success' by default.
// - The statusCode argument is used to set the status code of the response.
// - The data argument is used to send the response data.
// - It sets the message, statusCode, data, and success properties of the response object.
// - This class is used to create custom response objects with additional properties like statusCode and data.
// - It is used to send successful responses to the client with the specified status code and data.
// - It simplifies the response handling process by providing a consistent way to create response objects with custom properties.
//sampel usage
// import Apires from './apires.js';
// app.get('/', (req, res) => {
//     const data = { message: 'Hello, World!' };
//     res.json(new Apires('success', 200, data));
// });
// - This example demonstrates how to use the Apires class to create custom response objects with additional properties.
// - It shows how to send successful responses to the client with the specified status code and data.
// - It uses the Apires class to create a response object with a status code and data.
// - The route handler sends a JSON response with the response details.
// - This class simplifies the response handling process by providing a structured way to create and send responses to the client.
// - It is a common practice to use this class in express applications to handle responses and send data to the client.
// - It improves the response handling process by providing a consistent way to create response objects with custom properties.
// - It is recommended to use this class in express applications to create custom response objects and send responses effectively.
// - This class is useful for handling responses in express applications and simplifying the response handling process.
// - It is a best practice to use this class in express applications to handle responses and send data to the client in a clean and efficient way.
// - It is a good practice to use this class in express applications to handle responses and send data to the client effectively.