import "./login.scss"
import './login.css'
import logo from './images/logo.png';
import React, { useState } from "react";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleEmail = (event) => {
      setEmail(event.target.value)
  }
  const handlePassword = (event) =>{
      setPassword(event.target.value)
  }

  let handleLogin = async () =>{
    console.log({email,password})
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        email: email,
        password: password
      });
      console.log(response.data);
      alert("sucess")
    } catch (error) {
      console.error(error);
      alert("error")
    }
  }

  return (
    <div className="main-login-sec">
      
      <div className="login-frame shadow-lg p-5 mb-5 bg-body rounded">
      <div className="App-logo">
      <img src={logo}  alt="logo" />
      </div>
        <form id="login-form" >
          <div className="mb-3">
            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
            <input type="email" value={email} onChange={handleEmail} className="form-control pt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UserName" />
           
          </div>
          <div className="mb-3">
            {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
            <input type="password" value={password} onChange={handlePassword} className="form-control pt-3" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
          </div>
          <div className="center-btn">
          <button type="submit" onClick={handleLogin}  className="btn btn-primary text-center">Submit</button>
          </div>
         
        </form>
      </div>

    </div>
    
      )
}

export default Login