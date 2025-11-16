import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/adminDashboard/AdminDashboard'
import { SetLocalStorage ,GetLocalStorage} from './Utils/LocalStorage'
import {AuthContext} from './Context/AuthProvider'



function App() {
  
    const Authdata = useContext(AuthContext)
    const [loggedInUserData, setloggedInUserData] = useState(null)
    const [User, setUser] = useState(null)

    // useEffect(() => {
    //   const loggedInUser =localStorage.getItem('loggedInUser')
    //   if(loggedInUser){
    //     const UserData = JSON.parse(loggedInUser)
    //     setUser(UserData.role)
    //     setloggedInUserData(UserData.data)
    //   }
      
    // }, [])
    

  const handleLogin = (Email,Password)=>{

          if (Email == 'ayush@r.com' && Password == '123') {
             setUser('admin')
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } 
      
          else if (Authdata){
            const employee = Authdata.employees.find((e)=>e.email==Email && Password == e.password) 
            if(employee){
              setUser('employee')
              setloggedInUserData(employee)
              localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
          }
        } 
    else{alert('Invalid Credential')}
  }

    
  return (
   <>
   {!User?<Login handleLogin={handleLogin} />: ''}
   {User=='admin' ? <AdminDashboard  data={loggedInUserData}/>:User== 'employee'? <EmployeeDashboard data={loggedInUserData}/>:null }
   {/* <Login/> */}
   {/* <AdminDashboard/> */}
   {/* <EmployeeDashboard/> */}
   </>
  )
}

export default App