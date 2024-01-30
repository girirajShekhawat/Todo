import React from 'react';

function TaskList(props) {
 

    const handleCompletedButton=(e)=>{
   
}
    return (
        <div className='flex flex-col h-[60px] w-full p-[5px] px-[10px] m-[5px] bg-white '>
            <div className=''>
                <h3>Tittle</h3>
            </div>

             <div className='flex justify-between'>
             <div>
                <p>Task</p>
            </div>
             <div>
                {/* <label htmlFor='isCompleted'>Completed</label> */}
                <input type='checkbox' name='isCompleted' id='isCompleted'  
                onChange={handleCompletedButton}/>
            </div>
             </div>
           
        </div>
    );
}

export default TaskList;