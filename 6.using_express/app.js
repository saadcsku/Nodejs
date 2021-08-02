const express =require('express');

const app=express();


app.get("/",(req,res)=>{

res.send("Welcome to express Js");

})

app.listen(9000, ()=>{
 
    console.log("Server running on port 9000");

})