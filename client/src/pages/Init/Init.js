import React from 'react';
import './init.css';

import { useLocation, useNavigate } from 'react-router-dom';
import Miras from '../../components/Init/Miras';
import Login from '../../components/Init/Login';
import Register from '../../components/Init/Register';
import ForgetPassword from '../../components/Init/ForgetPassword';
import NewPass from '../../components/Init/NewPass';
import RegisterFeed from '../../components/Init/RegisterFeed';

const Init = () => {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div className='init'>
      <div className='tone'>
        <div className='init-content'>
          {
            location.pathname === "/" ? (
              <Miras />
            )
            : location.pathname === "/login" ? (
              <Login />
            )
            : location.pathname === "/register/user" || location.pathname === "/register/advisor" ? (
              <Register />
            ) 
            : location.pathname === "/forget-my-password" ? (
              <ForgetPassword />
            )
            : location.pathname === "/new-password" ? (
              <NewPass />
            ) 
            : location.pathname === "/register/user/feed" || location.pathname === "/register/advisor/feed" ? (
              <RegisterFeed />
            )
            : null
          }
        </div>
      </div>

    </div>
  )
}

export default Init