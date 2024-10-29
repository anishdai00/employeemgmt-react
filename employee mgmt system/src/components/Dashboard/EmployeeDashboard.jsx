import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklis from '../others/Tasklis'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C h-screen]'>
      <Header />
      <TaskList/>
      <Tasklis />
    </div>
  )
}

export default EmployeeDashboard
