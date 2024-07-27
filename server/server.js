const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();


const app=express();

app.get('/',(req,res)=>{
    res.json({msg:"Welcome to the server"})
})
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
})

//connect Mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(' MongoDB Connected ')
}).catch(err=>{
    console.log(err)})