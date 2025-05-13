const express = require('express');
const cors=require('cors');
const connect=require("./MongoDB/connect")
const {userRouter}= require('../backend/Routes/AuthRoutes/AuthRoutes')
 
const PORT=process.env.PORT || 8080
const app=express();
// middleware
app.use(cors())
// The express.urlencoded() function is a built-in middleware provided by the Express framework. It is used to parse URL-encoded form data submitted in HTTP POST requests. URL-encoded form data is a common way to send form data over the web.
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// routing table
app.use("/api",userRouter)
 
app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(PORT,async ()=>{
    console.log("server started at "+PORT);
    try{
       await connect
    }catch(e){
        console.log(e)
    }
})