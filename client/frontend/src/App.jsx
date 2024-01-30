import { useState } from 'react'
import TodoInput from './TodoInput'
import TaskList from './TaskList'
 

function App() {
   

  return (
    <div className='flex justify-center'>
      <div className='h-[1000px] w-[500px] bg-gray-500 md:w-[1300px] p-[10px] px-[20px]'>
      <TodoInput/>
      <TaskList/>
      </div>
 
    </div>
  )
}

export default App
