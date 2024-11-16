import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const Tasklis = ({data}) => {
    
  return (
    <div id = 'tasklis' className=' flex  overflow-auto mt-10 screen justify-between gap-5 '>
    
       {data.tasks.map((elem,idx)=>{
         if (elem.active){
            return <AcceptTask key={idx} data={elem} />
         }
         if (elem.newTask){
            return <NewTask key={idx} data={elem} />
         }
         if (elem.completed){
            return <CompleteTask key={idx} data={elem} />
         }
         if (elem.failed){
            return <FailedTask key={idx} data={elem}/>
         }
       })}   
      
    </div>
  )
}

export default Tasklis
