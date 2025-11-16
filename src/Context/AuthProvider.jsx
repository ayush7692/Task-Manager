import React, { createContext,useEffect,useState } from 'react'
import { GetLocalStorage ,SetLocalStorage} from '../Utils/LocalStorage'

export const AuthContext = createContext()

function AuthProvider({children}) {
  // localStorage.clear()
  const [UserData, setUserData] = useState(null)
  useEffect(() => {
    SetLocalStorage()
    const {employees,admin} = GetLocalStorage()
    setUserData({employees,admin})
  }, [])
  
  return (
    <AuthContext.Provider value={UserData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider