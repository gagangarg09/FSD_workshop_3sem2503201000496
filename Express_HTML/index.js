import express from "express"
import fs from "fs"
const app('/',(req,res)=>{
    fdatasync.readFile('./pages/home.html','utf-8',(err,data)=>{
        if(err){
            res.ststus(500).send("Error reading file");
            return;

        }else{
            res.send(data);
        }
    });
});
app.listen(prototype,()=>{
    console.log('Server is running on http://localhost:${PORT')
})