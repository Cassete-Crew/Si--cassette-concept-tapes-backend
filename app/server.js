import express from 'express'
import dotenv from 'dotenv'

//--- routes to be imported
import whoIsGay from './routes/testRoute'
//----

const environment = process.env.NODE_ENV

if(environment === 'development'){
    dotenv.config({path:process.cwd() + "/.env.development"})
}else if(environment === 'production'){
    dotenv.config({path:process.cwd()+"/.env.production"})
}

const port = process.env.PORT || 80;
const host  = process.env.HOST || 'localhost'

const app = express()

app.use('/api', whoIsGay)

app.get('/', (req, res)=>{
    res.status(200).send('joa is a gay')
})

app.listen(port, ()=>{
    console.log(`listening on port ${host}:${port}`)
})