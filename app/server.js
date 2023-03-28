import express from 'express'
import dotenv from 'dotenv'

//--- routes to be imported
import accountsRoute from './routes/accounts'
//----

let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
// let port = 8080;

const app = express()

const environment = process.env.NODE_ENV

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