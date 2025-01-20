import dotenv from "dotenv";
import connectDB from "./src/db/data.js";
import {app} from './app.js';
dotenv.config({path:'./.env'});
connectDB()
.then(() => {
    app.on('error', (error) => {
        console.error(`Error: ${error.message}`);
    });
    app.listen(process.env.PORT||4000, () => {
        console.log(`Server is running on port: ${process.env.PORT||3000}`);
    });
})
.catch((error) => {
    console.error(`Error: ${error.message}`);
});