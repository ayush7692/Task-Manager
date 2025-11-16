import React from 'react'

function Newtask({data}) {
  return (
      <div className='bg--400 h-full w-[350px] shrink-0 rounded-2xl border-2 border-amber-50 p-5 '>
            <div className='flex justify-between items-center'>
                <h1 className='bg-red-600 px-3 py-1 rounded '>High</h1>
                <h2 className='text-md'>{data.date}</h2>
            </div>
            <div className='mt-5'> 
                <h1 className='text-2xl font-semibold'>{data.title}</h1>
                <p className='mt-3 text-sm'>{data.description} </p>
            </div>
             <div className='flex itmes-center justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 rounded cursor-pointer text-md'>Accept Task</button>
            </div>
      </div>
  )
}

export default Newtask