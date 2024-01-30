import 'dotenv/config';
import express from "express";
import connectDb from './db/index.js';
import router from './routes/index.js';
const app=express();
const port = process.env.PORT||8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/task",router)






connectDb().then(()=>(
    app.listen(port,function(){
        console.log(`server is up and running on the port ${port}`)
    })
)).catch((error)=>{
    console.log(error)
    return 
})
 