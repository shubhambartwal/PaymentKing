const express= require('express')
const dotenv= require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
const app= express();

//connnecting to Db
mongoose.connect(process.env.DB_CONNECTION_STRING).then(()=>console.log('connected to mongoDB'))

app.listen(process.env.PORT,()=>console.log(`app is listening to port ${process.env.PORT}`))