const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const colors = require('colors');
//load env vars 
dotenv.config({path: './config/config.env'});

// connect Database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');


const app = express();
app.use(express.json());
app.use('/api/v1/bootcamps',bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,
    console.log(`Server runnnig in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    );

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`.red);
    server.close(()=>process.exit(1));
})