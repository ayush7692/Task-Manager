import React from 'react'

function Accepted({data}) {
  return (
    <div className='bg-r-400 h-full w-[350px] shrink-0 rounded-2xl border-2 border-amber-50 p-5 '>
            <div className='flex justify-between items-center'>
                <h1 className='bg-red-600 px-3 py-1 rounded '>High</h1>
                <h2 className='text-md'>{data.date}</h2>
            </div>
            <div> 
                <h1 className='text-2xl mt-4 font-semibold'>{data.title}</h1>
                <p className='mt-3 text-sm'>{data.description} </p>
            </div>
            <div className='flex itmes-center justify-between mt-4 '>
                <button className='bg-green-500 py-1 px-1 rounded cursor-pointer text-md'>Marked as Complete</button>
                <button className='bg-red-500 py-1 px-1 rounded cursor-pointer text-md'>Marked as Failed</button>
            </div>
        </div>
  )
}

export default Accepted