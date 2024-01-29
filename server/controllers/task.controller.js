import Task from "../model/task.model.js";
import mongoose from "mongoose";


export const createTask= async function(req,res){
      try {
        const {task,tittle}=req.body

        if(!task||!tittle){
            return res.status(400).json({
                msg:"task or tittle is not present"
            })
        }
    
           const toDo=   await  Task.create({tittle,task})
    
           if(!toDo){
            return res.status(401).json({
                msg:"task or tittle  not created"
            })
           }

           return res.status(200).json({
            msg:"task or tittle created successful",
            toDo
        })
      } catch (error) {
        return res.status(501).json({
            msg:"something went wrong",
            error
        })
      }
}

export const updateTask= async function(req,res){
    try {
       const{id}=req.params;
       const{tittle,task,isCompleted}=req.body;
   
       const toDo= await Task.findByIdAndUpdate(
        id,
        {
            tittle,
            task,
            isCompleted
        }
       )

       if(!toDo){
            return res.status(401).json({
                msg:"task or tittle  not updated"
            })
           }
           return res.status(200).json({
            msg:"task or tittle created successful",
            toDo
        })    
       }catch (error) {
        return res.status(501).json({
            msg:"something went wrong",
            error
        })
    }
}

export const deleteTask= async function(req,res){

    try {
        const{id}=req.params;
 
        const taskIsPresent=await Task.findById(id);
     
        if(!taskIsPresent){
         return res.status(401).json({
             msg:"task or tittle  not present"
         })
        }
     
               await taskIsPresent.remove();  
               return res.status(200).json({
                msg:"task or tittle deleted successful",
                taskIsPresent
            })
        
    } catch (error) {
        return res.status(501).json({
            msg:"something went wrong",
            error
        })
    }
    

}

