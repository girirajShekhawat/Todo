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
        <div>
         <form onSubmit={handleSubmit}>
            <div>
                 <label htmlFor='tittle'>Tittle</label>
                <input type='text' required placeholder='Tittle' name='tittle' id='tittle' 
                value={data.tittle}
                onChange={handleChange}
                />
            </div>
            <div>
                 <label htmlFor='task'>Task</label>
                <textarea type='text' required placeholder='Write your task' name='task' id='task'
                value={data.task} 
                onChange={handleChange}/>
            </div>
            {/* <div>
                <label htmlFor='isCompleted'>Completed</label>
                <input type='radio' name='isCompleted' id='isCompleted' value={data.isCompleted}
                onChange={handleCompletedButton}/>
            </div> */}
            <button type='sumbit'>Make Task</button>
         </form>
        </div>
    );
}

export default TodoInput;