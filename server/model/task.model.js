import mongoose  from "mongoose";

const taskSchema=mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    task:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    }
},
{timestamps:true});

const Task=mongoose.model("Task",taskSchema);

export default Task;