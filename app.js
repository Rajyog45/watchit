import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json({limit:'20kb'}));
app.use(express.urlencoded({extended:true,limit:'20kb'}));
app.use(express.static('public'));
app.use(cookieParser()); 
app.use(cors({
    origin:process.env.cors_origin,
    credentials:true
}));
import user from './src/routes/user.route.js';
app.use('/api/user',user);
// console.log("hell world");

export {app};
// /*
