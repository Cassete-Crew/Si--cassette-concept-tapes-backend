import express from 'express'
import bodyParser from 'body-parser'
const route = express.Router()

route.use(bodyParser.json())

let accounts = [
    {
      "id": 1,
      "username": "paulhal",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "johndoe",
      "role": "guest"
    },
    {
      "id": 3,
      "username": "sarahjane",
      "role": "guest"
    }
  ];

route.get("/who-is-gay", (req, res)=>{
    res.status(200).send('joa')
});

route.get("/accounts", (req, res)=>{
    res.json(accounts);
});

route.get("/accounts/:id", (req, res) => {
    const accountId = Number(req.params.id);
    console.log("accountId is..."+accountId);
    const getAccount = accounts.find((account) => account.id === accountId);
    console.log("getAccount is..."+getAccount);

    if (!getAccount) {
        res.status(500).send('Account not found.')
      } else {
        res.json(getAccount);
      }
});
export default route