import express from 'express'
import bodyParser from 'body-parser'
const route = express.Router()

route.use(bodyParser.json())

route.get("/who-is-gay", (req, res)=>{
    res.status(200).send('joa')
})

export default route