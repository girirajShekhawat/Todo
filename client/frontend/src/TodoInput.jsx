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
        <div className='flex flex-col h-[300px] w-[400px] border-2 border-indigo-600  '>
         <form onSubmit={handleSubmit}>
            <div className='  '>
                 <label htmlFor='tittle' className='h-[40px] w-full'>Tittle</label>
                <input type='text' required placeholder='Tittle' name='tittle' id='tittle' 
                value={data.tittle}
                onChange={handleChange}
                className='h-[40px]   w-full mt-[8px] '
                />
            </div>
            <div className='h-[40px] w-full mt-[15px]  '>
                 <label htmlFor='task'  className='h-[40px] w-full   ' >Task</label>
                <textarea type='text' required placeholder='Write your task' name='task' id='task'
               rows={7} cols={50} 
               value={data.task} 
                onChange={handleChange}
                className='     mt-[8px]   '
                />
            </div>
            <div className='mt-[170px]'>
            <button type='sumbit' className='  bg-blue-700'>Make Task</button>
            </div>
             
         </form>
          
        </div>
    );
}

export default TodoInput;