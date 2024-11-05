import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'


const CreateTask = () => {
const [userData,setUserData] =useContext(AuthContext)

const[taskTitle,setTaskTitle] =useState('')
const[taskDescription,setTaskDescription] =useState('')
const[taskDate,setTaskDate] =useState('')
const[assignTo,setAssignTo] =useState('')
const[category,setCategory] =useState('')

const[newtask,setNewTask] =useState('')
  const subHandler =(a)=>{
    a.preventDefault()
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:true,completed:false})
    

  const data = userData ;
 
  data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newtask)
        elem.taskCounts.newTask = elem.taskCounts.newTask  + 1
        
      }
    })
    setUserData(data)
    console.log(data)
   

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')

    
  }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form  onSubmit={(a)=>{
      subHandler(a)
    }}
    className='flex  flex-wrap w-full items-start justify-between bg-black-200'>
        <div className='w-1/2'>
                  <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                      <input value={taskTitle} onChange={(a)=>setTaskTitle(a.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400t' type="text" placeholder='Make a React Project' />
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input  value={taskDate} onChange={(a)=>setTaskDate(a.target.value)}className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="Date" />
                    </div>
                     <div>
                       <h3  className='text-sm text-gray-300 mb-0.5'>Assign to </h3>
                        <input value={assignTo} onChange={(a)=>setAssignTo(a.target.value)}className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'type="text" placeholder='Employee name' />
                    </div>
                    <div>
                       <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                         <input value={category} onChange={(a)=>setCategory(a.target.value)}className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design ,components,pages etc' />

                    </div>
                    

                       
        </div>
         <div className='w-2/5 flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={taskDescription} onChange={(a)=>setTaskDescription(a.target.value)} className='w-full h-44 text-sm px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'name="" id="" cols={30} rows={10}></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-600 rounded text-sm mt-5 p-3 w-full'>Create task</button>
        </div>
        
            
         

    </form>
  
</div>
  )
}

export default CreateTask
