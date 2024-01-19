import React, { useState } from 'react'
import { Login } from "./Login.js";
import { Register } from "./Register.js";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthPageToggle = () => { // handle isLogin true or false
    setIsLogin(preValue => {
      return !preValue
    })
  }

  return (
    <div>{isLogin ? (<Login switchAuthhandler={handleAuthPageToggle}
    />) : (<Register
      switchAuthhandler={handleAuthPageToggle}
    />)}</div>
  )
}

export default AuthPage