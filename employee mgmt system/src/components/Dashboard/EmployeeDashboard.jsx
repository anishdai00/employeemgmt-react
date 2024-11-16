import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklis from '../others/Tasklis'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskList data={props.data} />
        <Tasklis data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
