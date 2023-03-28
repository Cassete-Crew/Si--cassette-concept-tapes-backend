import express from 'express'
import dotenv from 'dotenv'

//--- routes to be imported
import accountsRoute from './routes/accounts'
//----

let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
// let port = 8080;
import book from './routes/book.js';

const app = express()

import config from '../config/default.json'; //we load the db location from the JSON files

const environment = process.env.NODE_ENV

//db options
let options = { 
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
              }; 
//db connection   
// const dbHost = process.env.DB_HOST;
// dbHost.toString();
const url = "mongodb+srv://Admin:G1w4bV6BwWPUYigT@cluster0.ivy05xp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

if(environment === 'development'){
    dotenv.config({path:process.cwd() + "/.env.development"})
}else if(environment === 'production'){
    dotenv.config({path:process.cwd()+"/.env.production"})
}

const port = process.env.PORT || 80;
const host  = process.env.HOST || 'localhost'


app.use('/api', accountsRoute)

app.get('/', (req, res)=>{
    res.status(200).send('homepage')
})

app.listen(port, ()=>{
    console.log(`listening on port ${host}:${port}`)
})