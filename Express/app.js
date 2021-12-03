const express = require('express');
const app = express();
const mdb = require('mongoose')

app.use(express.json());
// routes
// get - [retreive information]
// post - [send information]
// delete - delete smthing
// patch - update

// const env = require('dotenv/config')

// env-cmd -f ./.gitignore/creds.env
mdb.connect(process.env.DB, (e)=>{   
    if(e) console.log(e.message)

    else console.log('Database Connected')
})

app.get('/home', (req, res)=>{
    // console.log('Welcome to Express JS')
    res.send()
    // res.json({body:{
    //     message: 'Welcome to Express JS'
    // }})
})

app.listen('3000', ()=>{
    console.log("Server is up and Running!!")
})