const express = require('express')
const app = express()
const connect=require('./config/connect')
const router=require('./Routes/user')

app.use(express.json())

// connect to database
connect();

// routes
app.use("/users",router)

// create port
const port = process.env.PORT || 4000;
app.listen(port,(err)=>{
    if((err)) console.log ("server not connecting")
    else console.log(`The server is running on port ${port}`)
   
})