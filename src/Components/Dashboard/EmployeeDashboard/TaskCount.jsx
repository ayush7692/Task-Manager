import React from 'react'


function TaskCount({data}) {
  return (
    <div className='mt-15 flex items-center justify-center gap-5 '>
      <div className='bg-blue-300 border-2 rounded-xl w-[25%] h-30 text-white p-6 '>
            <h2 className='text-3xl font-bold'>{data.taskCount.new}</h2>
            <h3 className='text-xl mt-2 font-medium'> New Task</h3>
        </div>
        <div className='bg-yellow-400 border-2 rounded-xl w-[25%] h-30 text-gray p-6 '>
            <h2 className='text-3xl font-bold'>{data.taskCount.active}</h2>
            <h3 className='text-xl mt-2 font-medium'>Accepted</h3>
        </div>
        <div className='bg-green-400 border-2 rounded-xl w-[25%] h-30 text-white p-6 '>
            <h2 className='text-3xl font-bold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl mt-2 font-medium'>Completed</h3>
        </div>
        <div className='bg-red-400 border-2  rounded-xl w-[25%] h-30 text-white p-6 '>
            <h2 className='text-3xl font-bold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl mt-2 font-medium'>Failed</h3>
        </div>
         
    </div>
  )
}

export default TaskCount