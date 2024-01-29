import React from 'react';

function TaskList(props) {
 

    const handleCompletedButton=(e)=>{
   
}
    return (
        <div>
            <div>
                <h3>Tittle</h3>
            </div>
            <div>
                <p>Task</p>
            </div>
             <div>
                <label htmlFor='isCompleted'>Completed</label>
                <input type='checkbox' name='isCompleted' id='isCompleted'  
                onChange={handleCompletedButton}/>
            </div>
        </div>
    );
}

export default TaskList;