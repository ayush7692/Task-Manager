import { useState } from "react"


function Login({handleLogin}) {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const Submithandler =(e)=>{
        e.preventDefault()
        handleLogin(Email,Password)

        if(!Email || !Password){
             alert("Both field Required")
        }
        console.log("email",Email)
        console.log("Password" ,Password)
        setEmail('')
        setPassword('')
        
    }

  return (
     
     <div className='text-white w-screen h-screen flex flex-col items-center justify-center'  >
        <h1 className="text-4xl font-bold text-gray-400 pb-15"> - LogIn Page -</h1>
       <div className="text-white border-2  border-green-300 rounded-2xl" >
         <form className=" flex flex-col items-center justify-center px-5 py-25"
            onSubmit={(e)=>{
                Submithandler(e)
            }}>
            <input className="border-2  text-white rounded-full w-89 px-8 py-4 m-4 mt-8 text-xl placeholder:text-gray-400"
                type="Email"
                placeholder="Enter Email"
                value={Email}
                onChange={(e)=>{ setEmail(e.target.value)}}
                />
                <input className="border-2 text-white rounded-full w-89 px-8 py-4 m-4 text-xl placeholder:text-gray-400 " 
                type="Password"
                placeholder="Enter Password"
                value={Password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
              <button className="border-2  bg-emerald-600 text-white rounded-full w-50 cursor-pointer px-8 py-4 m-4 text-xl">
                LogIn
              </button>
         </form>
       </div>
     </div>
    
  )
}

export default Login