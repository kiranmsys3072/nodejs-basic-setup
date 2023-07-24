const express=require('express');
const app=express();
const tasks=require('./routes/tasks');

// app.get('/hello',(req,res)=>{
//     res.send("Hello")
// })
app.use('/api/v1/tasks',tasks)

app.listen(3030,()=>{
    console.log("server is running on port 3030")
})