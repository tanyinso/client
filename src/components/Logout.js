import React from 'react';
import {useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookie = new Cookies()

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user's session or token (example using localStorage)
     cookie.remove('TOKEN');
     navigate('/')
     window.location.reload()
    // Redirect the user to the login page
    //history.push('/login');
  };

  return (
    <button onClick={handleLogout} className='delete-btn'>
      Logout
    </button>
  );
};

export default LogoutButton;