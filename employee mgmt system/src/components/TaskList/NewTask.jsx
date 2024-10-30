import React from 'react'

function NewTask() {
  return (
    <div>
         <div className='h-[250px] w-[370px] bg-green-400 rounded-xl px-2 py-3'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 text-sm px-4 py-1 mt-1 rounded '> High</h3>
                <h4 className='text-sm font-semibold'>27 oct 2024</h4>
            </div>
            <h2 className='mt-3 p-2 text-3xl font-semibold '>Making your website</h2>
            <p className='text-sm mt-1'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam debitis at sit, repellat a quae error nesciunt, minima ducimus tempora cum nobis modi laborum magni eveniet cumque minus consequuntur illo!
            </p>
            <div>
                <button className='bg-blue-500 py-2 px-2 text-sm mt-4'>Accept task</button>
            </div>
       
        </div>
      
    </div>
  )
}

export default NewTask
