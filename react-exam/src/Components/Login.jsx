import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    pass: ""
  })
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length > 0) {
      
      const user = users.find((user) => user.email === loginData.email && user.pass === loginData.pass)
      if (user) {
        
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("No users found. Please sign up first.");
    }
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' onChange={handleChange} value={loginData.email} className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <input type='password' name='pass' onChange={handleChange} value={loginData.pass} className="form-control"/>
        </div>
        <button type="submit" className="btn-submit">Login</button>
      </form>
    </div>
  )
}

export default Login
