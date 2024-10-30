import React from 'react'

function AcceptTask() {
  return (
    <div>
        <div className='h-[250px] w-[370px] bg-blue-400 rounded-xl px-2 py-3'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 text-sm px-4 py-1 mt-1 rounded '> category</h3>
                <h4 className='text-sm font-semibold'>27 oct 2024</h4>
            </div>
            <h2 className='mt-3 p-2 text-3xl font-semibold '>Making your website</h2>
            <p className='text-sm mt-1'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam debitis at sit, repellat a quae error nesciunt, minima ducimus tempora cum nobis modi laborum magni eveniet cumque minus consequuntur illo!
            </p>
            <div className='flex justify-between mt-4'>
              <button className='bg-green-500 py-1 px-2 text-sm'>mark as completed</button>
              <button className='bg-red-500 py-1 px-2 text-sm '>mark as failed</button>
           </div>
       
        </div>
        
    </div>
  )
}

export default AcceptTask
