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
       const{task,isCompleted,_id}=req.body;
      
       let toDo= await Task.findById(_id);

      if(!toDo){
        return res.status(401).json(
            {
                msg:"task is not find"
            }
        )
      }
      
      
       
      if(toDo.isCompleted && isCompleted){
        return res.status(401).json(
            {
                msg:"this task is already completed"
            }
        )
      }

         
   
         toDo= await Task.save(
        
        {
            tittle:tittle|| toDo.tittle,
            task:task|| toDo.task,
            isCompleted: isCompleted|| toDo.isCompleted,
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
         console.log(id)
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

export const readTasks= async function(req,res){

    try {
     const task  = await Task.find()
       return res.status(200).json({
        task,
        msg:"all the tasks"
       })
    } catch (error) {
        return res.status(501).json({
            msg:"something went wrong",
            error
        })
    }
}

