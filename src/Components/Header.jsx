import React, { useEffect, useState } from 'react'
import Logo from "../Assets/Logo.png"
import {Button } from "@mui/material"
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from "../constants/ActionTypes"
import "./Header.css"

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();



  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/');

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  return (
    <div className="Header">
      <img src={Logo} alt="Logo" />
      <div className="Button-Box">
          <div className="Button">
           <Button
              variant="contained"
              color="primary"
              onClick={logout}>Logout</Button>
          </div>
          </div>
    </div>
  )
}
export default Header