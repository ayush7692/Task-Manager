import React from 'react'
import Header from './Header'
import TaskCount from './TaskCount'
import TaskList from './TaskList'
function EmployeeDashboard({data}) {
  return (
    <div className='p-12 w-screen h-screen '>
    <Header data={data}/>
    <TaskCount data={data}/>
    <TaskList data={data}/>
    </div>
    
  )
}

export default EmployeeDashboard