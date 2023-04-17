import React from 'react'

export default function LoginPage({setUser}) {


    function handleLogin(){
        setUser(document.getElementById("username").value)
    }

  return (
    <div className="loginBox">
        <div>LoginPage</div>
        <input id = "username" type="text" placeholder="username" />
        <button onClick={handleLogin}>Login</button>
    </div>
    
  )
}
