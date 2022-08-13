import React, { useState } from 'react';
import "./login.css";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../actions/Users';

const Login = () => {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  var email = "";
  var pass = "";
  if (location.search !== "") {
      console.log(location.search.split("&")[0].split("=")[1]);
      try {
        email = location.search.split("&")[0].split("=")[1];
        pass = location.search.split("&")[1].split("=")[1];
      } catch (error) {
        console.log(error);
      }
    }

    const [userLogin, setUserLogin] = useState({
        email: email,
        password: pass
    });

    

    const [showPassword, setShowPassword] = useState(false);
    

  return (
    <div className='login'>
        <div className='login-top'>
            <h2 className='login-top-title'>Giriş</h2>
            <h2 className='login-top-miras'>Miras Eğitim</h2>
        </div>
        <center><div className='login-line'></div></center>
        <div className='login-inputs'>
            <TextField fullWidth label="Email" value={userLogin.email} onChange={e => setUserLogin({...userLogin, email: e.target.value})} />
            <FormControl sx={{ m: "20px 0", width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={userLogin.password}
                onChange={e => setUserLogin({...userLogin, password: e.target.value})}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={e => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
        </div>
        
        <div className='login-proccess-buttons'>
            <button onClick={() => {
              dispatch(login(userLogin));
            }} className='login-button'>Giriş Yap</button>
            <p>Henüz bir hesabınız yok mu? <Link to="/" >Kayıt Ol</Link></p>
            <p>Şifrenizi mi unuttunuz? <Link to="/forget-my-password" >Şifremi Unuttum</Link></p>
        </div>
    </div>
  )
}

export default Login