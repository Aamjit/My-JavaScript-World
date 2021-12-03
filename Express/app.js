const express = require('express');
const app = express();
const mdb = require('mongoose')

app.use(express.json());
// routes
// get - [retreive information]
// post - [send information]
// delete - delete smthing
// patch - update



mdb.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.hwj9j.mongodb.net/mdb-1?retryWrites=true&w=majority`, (e)=>{
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