import express from 'express';
import { Connection } from "./database/db.js";
import dotenv from 'dotenv';

import DefaultData from "./default.js";

import router from "./routes/route.js";

import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', router)

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@flipkart-assignment-shard-00-00.s9ikq.mongodb.net:27017,flipkart-assignment-shard-00-01.s9ikq.mongodb.net:27017,flipkart-assignment-shard-00-02.s9ikq.mongodb.net:27017/FLIPKART-ASSIGNMENT?ssl=true&replicaSet=atlas-4bn7yl-shard-0&authSource=admin&retryWrites=true&w=majority`



Connection(URL);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('flipkart-assignment/build'))
}

app.listen(PORT, ()=> console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();