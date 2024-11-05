import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const Tasklis = ({data}) => {
    
  return (
    <div id = 'tasklis' className=' flex  overflow-auto mt-10 screen justify-between gap-5 '>
    
       {data.tasks.map((e,idx)=>{
         if (e.active){
            return <AcceptTask key={idx} data={e} />
         }
         if (e.newTask){
            return <NewTask key={idx} data={e} />
         }
         if (e.completed){
            return <CompleteTask key={idx} data={e} />
         }
         if (e.failed){
            return <FailedTask key={idx} data={e}/>
         }
       })}   
      
    </div>
  )
}

export default Tasklis
