import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    useEffect(() => {
        if (!loggedInUser) {
            navigate("/login");
        }
    }, [loggedInUser, navigate]);

    return loggedInUser ? children : null;
}

export default PrivateRoute
