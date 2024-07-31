const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cookieParser=require('cookie-parser');

const app=express();
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.json({msg:"Welcome to the server"})
})
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
})

//routes
app.use('/user',require('./routes/userRouter'));


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