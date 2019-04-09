import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from './routes/';
import cookieParser from 'cookie-parser';
import path from 'path';
const app = express();

// set up port to .env
const env = dotenv.config();
const port = process.env.PORT || 5000;
// using cors for exteneral browser requests
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// logs get/posts requests
app.use(morgan("dev"));

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})
