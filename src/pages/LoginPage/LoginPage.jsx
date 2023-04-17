import React from 'react'

export default function LoginPage({setUser}) {


    function handleLogin(){
        setUser(document.getElementById("username").value)
    }

  return (
    <div className="loginBox">
        <h2>Enter your username: </h2>
        <input id = "username" style = {{width: "50%"}} type="text" placeholder="username" />
        <button onClick={handleLogin} style = {{width: "50%"}}>Login</button>
    </div>
    
  )
}
