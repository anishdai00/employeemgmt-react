import React from 'react'

function CompleteTask({data}) {
  return (
    <div>
       <div className='h-[250px] w-[370px] bg-yellow-400 rounded-xl px-2 py-3'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 text-sm px-4 py-1 mt-1 rounded '>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-3 p-2 text-3xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-sm mt-1'>
                {data.taskDescription}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-green-500 py-1 px-2 text-sm'>completed</button>
            </div>
       
        </div>
    </div>
  )
}

export default CompleteTask
