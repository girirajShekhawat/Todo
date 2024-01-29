import mongoose from "mongoose";

const connectDb= async function(){
try {
   const connect=  await mongoose.connect(`${process.env.MONGODB_URI}/ToDoDb`);
   if(connect){
    console.log(`MongoDb is connected ${connect}`)
   }

} catch (error) {
    console.log(`Connection with mongoDb is failed${error}`);
    process.exit(1)
}
}


export default connectDb;
