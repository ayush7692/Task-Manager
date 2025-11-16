import React from 'react'
import Accepted from '../../TaskList/Accepted'
import Failed from '../../TaskList/Failed'
import Newtask from '../../TaskList/Newtask'
import Completed from '../../TaskList/Completed'


function TaskList({data}) {
  return (
    <div id='tasklist' className=' h-[50%] w-full overflow-x-auto rounded-2xl mt-15 py-5 flex items-center gap-5 text-white'>
        {data.tasks.map((e,idx)=>{
          if(e.active){
            return(<Accepted data={e} key={idx}/>)
          }
          if(e.failed){
            return(<Failed data={e} key={idx}/>)
          }
          if(e.newTask){
            return(<Newtask data={e} key={idx}/>)
          }
          if(e.completed){
            return(<Completed data={e} key={idx}/>)
          }
        })}
     </div>
  )
}

export default TaskList 