import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        pass:""
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        existingUsers.push(formData);
        
        localStorage.setItem("users", JSON.stringify(existingUsers));
        alert("Signup successful! Please login.");
        setFormData({
             name:"",
        email:"",
        pass:""
        });
        navigate("/login");
    }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' onChange={handleChange} value={formData.name} className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' onChange={handleChange} value={formData.email} className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <input type='password' name='pass' onChange={handleChange} value={formData.pass} className="form-control"/>
        </div>
        <button type="submit" className="btn-submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup
