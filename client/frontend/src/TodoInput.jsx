import React, { useState } from 'react';

function TodoInput(props) {
const[data, setData]=useState({
    tittle:"",
    task:"",
   
})

const handleChange=(e)=>{
 const {name,value}=e.target;

 setData((preData)=>({
    ...preData,
    [name]:value
 }
 ))
}

// const handleCompletedButton=(e)=>{
//     setData((preData)=>({
//         ...preData,
//         isCompleted:true
//      }
//      ))
// }
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(data)
}

    return (
        <div className='flex flex-col h-[300px] w-full  '>
         <form onSubmit={handleSubmit}>
            <div className='flex  '>
                 {/* <label htmlFor='tittle' className='mt-[15px] mr-[5px]'>Tittle</label> */}
                <input type='text' required placeholder='Tittle' name='tittle' id='tittle' 
                value={data.tittle}
                onChange={handleChange}
                className='h-[40px]   w-full mt-[8px] '
                />
            </div>
            <div className='h-[40px] w-full mt-[15px]  '>
                 {/* <label htmlFor='task'  className='h-[40px] w-full   ' >Task</label> */}
                <textarea type='text' required placeholder='Write your task' name='task' id='task'
               rows={7}  
               value={data.task} 
                onChange={handleChange}
                className='  w-full   mt-[8px]   '
                />
            </div>
            <div className='mt-[160px]'>
            <button type='sumbit' className='p-[3px] px-[6px] rounded-full  bg-red-700'>Add Task</button>
            </div>
             
         </form>
          
        </div>
    );
}

export default TodoInput;