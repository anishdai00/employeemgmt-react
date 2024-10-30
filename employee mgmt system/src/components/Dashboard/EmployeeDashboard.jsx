import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklis from '../others/Tasklis'

const EmployeeDashboard = ({data}) => {

  return (
    <div className='p-10 bg-[#1C1C1C h-screen]'>
      <h1>{data.id}</h1>
      <Header data={data}/>
      <TaskList data={data}/>
      <Tasklis data={data} />
    </div>
  )
}

export default EmployeeDashboard
