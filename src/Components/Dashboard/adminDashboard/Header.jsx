import React from 'react'

function Header({data}) {
  const handleLogout = ()=>{
    localStorage.setItem('loggedInUser',' ')
    window.location.reload()
  }
 
  return (
    <div className=' text-white flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-medium'> Ayush Raghuwanshi👋</span></h1>
        <button onClick={handleLogout} className='bg-red-600 font-medium px-5 py-2 rounded-md text-md cursor-pointer hover:bg-blue-500 border-2'>LogOut</button>
    </div>
  )
}

export default Header