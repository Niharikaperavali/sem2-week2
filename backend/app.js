const express = require('express');
const app = express();
const connection = require('./src/config/DBconnection.js');
const admin = require('./src/routes/adminRoutes');
connection();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("HOME");
    res.send("Hello world !")
})

app.use('/auth',admin)



app.listen(3000,()=>{
    console.log("server is running......")
})