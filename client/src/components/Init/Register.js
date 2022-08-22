import React, { useState } from 'react';
import "./register.css";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Link, useLocation, useNavigate } from "react-router-dom";
import KVKK from './KVKK';

import { useDispatch } from "react-redux";
import { createUser } from '../../actions/Users';

const Register = () => {

    const location = useLocation();
    const navigation = useNavigate()

    const dispatch = useDispatch();


    const [newUser, setNewUser] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [Kvkk, setKvkk] = useState("none");
    

  return (
    <div className='register'>
        <div className='register-top'>
            <h2 className='register-top-title'>Kayıt</h2>
            <h2 className='register-top-miras'>Miras Eğitim</h2>
        </div>
        <center><div className='register-line'></div></center>
        {
          location.pathname == "/register/advisor" ? (
            <p>Uzman ilanı vermek için önce kayıt olmalısınız...</p>
          ) : null
        }
        <div className='register-inputs'>
            <TextField required  sx={{ m: "15px 0", width: '100%' }} fullWidth label="Ad Soyad" value={newUser.fullName} onChange={e => setNewUser({...newUser, fullName: e.target.value})} />
            <TextField required fullWidth label="Email" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} />
            <FormControl sx={{ m: "15px 0", width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Şifre *</InputLabel>
              <OutlinedInput
                required
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={newUser.password}
                onChange={e => setNewUser({...newUser, password: e.target.value})}
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

            <input required style={{fontSize: "24px"}} type="checkbox" placeholder="KVKK" />
            <span onClick={() => setKvkk("block")}>KVKK Aydınlatma Metnini Onaylıyorum *</span>
        </div>
        
        <div className='register-proccess-buttons'>
            {
                location.pathname === "/register/user" ? (
                    <button onClick={() => {
                      dispatch(createUser(newUser));
                      navigation(`/register/user/feed`);
                    }} className='register-button'>Kayıt Ol</button>
                )
                : location.pathname === "/register/advisor" ? (
                    <button onClick={() => navigation(`/register/advisor/feed`)} className='register-button'>Kayıt Ol ve Devam Et</button>
                ) : null
            }
            <p>Zaten bir hesabınız var mı? <Link to="/login" >Giriş Yap</Link></p>
        </div>
      <KVKK display={Kvkk} setKvkk={setKvkk} />  
    </div>
  )
}

export default Register