import React from 'react'
import Header from '../EmployeeDashboard/Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'

function AdminDashboard({data}) {
  return (
    <div className=' w-full h-screen p-15'>
        <Header data={data}/>
        <CreateTask data={data}/>
        <AllTask data={data}/>
    </div>
  )
}

export default AdminDashboard