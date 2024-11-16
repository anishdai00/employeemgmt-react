import React from 'react'
// import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import AdminHeader from '../others/adminHeader'





const AdminDashboard = (props) => {
  return ( 
    <div className='h-screen w-full p-7'>
          <AdminHeader changeUser={props.changeUser}  data ={props.data} />
          <CreateTask data={props.data} />
          <AllTask data={props.data} />

    </div>
  
  )
}

export default AdminDashboard
