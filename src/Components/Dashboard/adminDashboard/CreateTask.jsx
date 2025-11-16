import React from 'react'

function CreateTask() {
  return (
        <div className='mt-12 p-5 bg-[#2C2C3C] rounded ' >
            <form className='flex flex-wrap itmes-start justify-between'>
                <div className=' w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-1'> Task Title</h3>
                    <input className='text-sm text-gray-300 mb-6 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 ' type="text" placeholder='Enter title here' />
                    <h3 className='text-sm text-gray-300 mb-1'> Date</h3>
                    <input className='text-sm text-gray-300 mb-6 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 ' type="date"  />
                    <h3 className='text-sm text-gray-300 mb-1'> Assign To</h3>
                    <input className='text-sm text-gray-300 mb-6 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 ' type="text" placeholder='Employee name' />
                    <h3 className='text-sm text-gray-300 mb-1'> Category</h3>
                    <input className='text-sm text-gray-300 mb-6 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 ' type="text" placeholder='Enter design,dev,etc' />
                </div>
                <div className='w-2/5 flex flex-col item-start'>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea className=' text-gray-200 w-full h-54 text-sm py2 px-4 rounded outline-none bg-transparent border-2 border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 text-white mt-5 py-2 px-5 rounded-xl text-lg cursor-pointer'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask