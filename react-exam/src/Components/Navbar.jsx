import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    }
  return (
    <div>
      <nav className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/">Signup</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/productlist">Product List</Link>
        <input type='button' name='logout' value="Logout" onClick={handleLogout} className="logout-btn"/>
      </nav>
    </div>
  )
}

export default Navbar
