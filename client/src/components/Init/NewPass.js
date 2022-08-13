import React, { useState } from 'react';
import "./newPass.css";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Link } from "react-router-dom";

const NewPass = () => {

    const [newPass, setNewPass] = useState({
        code: "",
        password: "",
        passwordAgain: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    

  return (
    <div className='newPass'>
        <div className='newPass-top'>
            <h2 className='newPass-top-title'>Yeni Şifre</h2>
            <h2 className='newPass-top-miras'>Miras Eğitim</h2>
        </div>
        <center><div className='newPass-line'></div></center>
        <div className='newPass-inputs'>
            <TextField fullWidth label="Kod" value={newPass.code} onChange={e => setNewPass({...newPass, code: e.target.value})} />
            <FormControl sx={{ m: "20px 0", width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Yeni Şifre</InputLabel>
              <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={newPass.password}
                onChange={e => setNewPass({...newPass, password: e.target.value})}
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
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Şifrenizi Tekrar Giriniz</InputLabel>
              <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={newPass.passwordAgain}
                onChange={e => setNewPass({...newPass, passwordAgain: e.target.value})}
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
        
        <div className='newPass-proccess-buttons'>
            <button className='newPass-button'>Kaydet</button>
        </div>
    </div>
  )
}

export default NewPass