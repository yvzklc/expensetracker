import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import "../style/login.css"
const Login = () => {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const {login} = useContext(AuthContext)
  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log({email,pass})
    if(email.toLowerCase()==="admin@aa.com" && pass.toLowerCase()==="admin"){
      login({email,pass})
    }else{
      alert("Kullanıcı bilgileri yanlış")
    }
  }
  return (
    <div className="loginDiv">
      <div className="loginContainer">
    
        <div>
          <h3>SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col text-left p-3 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="loginButton">
            Sign In
          </button>
          <p className="forgotPassword">
            <span>Forgot your password?</span>
            <a href="#" className="resetPassword">
              Reset Password
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;