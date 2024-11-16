import React from 'react'

const AdminHeader = (props) => {
  
   
        const logoutUser = ()=>{
            localStorage.setItem('loggedInUser','')
        
          
           props.changeUser('');
        }


        return (
            <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>admin</span></h1>
            <button onClick={logoutUser} className='bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-xl'>Log out</button>
            </div> 
        )
            
            
        
        }

export default AdminHeader
