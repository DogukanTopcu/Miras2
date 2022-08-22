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

import { emailCheck } from "../../api";

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
    const [kvkkConfirm, setKvkkConfirm] = useState(false);
    const [kvkkAlert, setKvkkAlert] = useState(false);
    
    const [alertMessage, setAlertMessage] = useState("");


    const nameCheck = (name) => {
      const seperatedName = name.split(" ");
      if (name == "") {
        return "Ad kısmı boş bırakılamaz";
      }
      else if (seperatedName.length < 2) {
        return "Lütfen tam adınızı giriniz"
      }

      return true;
    }
    const emailCheckF = async (email) => {
      const { data } = await emailCheck(email);
      console.log(data);
      if (email == "") {
        return "Email kısmı boş bırakılamaz";
      } else if (email.split("@").length < 2 || email.split("@")[1].split(".").length < 2) {
        return "Lütfen geçerli bir email giriniz";
      } else if (data == true) {
        return "Bu emaili kullanan bir hesap zaten var"
      }


      return true;
    }
    const passwordCheck = (password) => {
      if (password == "") {
        return "Şifre kısmı boş bırakılamaz";
      }
      else if (password.length < 8) {
        return "Karakter sayısı 8'den küçük olamaz";
      }


      return true;
    }
    const registerUser = async () => {
      const name = await nameCheck(newUser.fullName);
      const email = await emailCheckF(newUser.email);
      const password = await passwordCheck(newUser.password);

      setKvkkAlert(!kvkkConfirm);

      if (name == true && email == true && password == true && kvkkConfirm == true && kvkkConfirm == true) {
        dispatch(createUser(newUser));
        if (location.pathname == "/register/advisor") {
          navigation(`/register/advisor/feed`)
        } else if (location.pathname == "/register/user") {
          navigation(`/register/user/feed`);
        }
      }
      else {
        if (name == true && email != true && password != true) {
          setAlertMessage(`${email}, ${password}`);
        } 
        else if (name != true && email == true && password != true) {
          setAlertMessage(`${name}, ${password}`);
        } 
        else if (name != true && email != true && password == true) {
          setAlertMessage(`${name}, ${email}`);
        } 
        else if (name == true && email == true && password != true) {
          setAlertMessage(`${password}`);
        } 
        else if (name == true && email != true && password == true) {
          setAlertMessage(`${email}`);
        } 
        else if (name != true && email == true && password == true) {
          setAlertMessage(`${name}`);
        } 
        else if (name == true && email == true && password == true) {
          setAlertMessage("");
        } 
        else {
          setAlertMessage(`${name}, ${email}, ${password}`);
        }
        
        setTimeout(() => setAlertMessage(""), 10000);
      }
    }

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
        {
          alertMessage ? <div className='registerAlert'>{alertMessage}</div> : null
        }
        {
          kvkkAlert ? <div style={{marginTop: "10px"}} className='registerAlert'>Üye olmak için KVKK metnini kabul etmeniz gerek</div> : null
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

            <input onClick={() => setKvkkConfirm(!kvkkConfirm)} required style={{fontSize: "24px"}} type="checkbox" placeholder="KVKK" />
            <span style={{cursor: "pointer", textDecoration: "underline"}} onClick={() => setKvkk("block")}>KVKK Aydınlatma Metnini Onaylıyorum *</span>
        </div>
        
        <div className='register-proccess-buttons'>
            {
                location.pathname === "/register/user" ? (
                    <button onClick={registerUser} className='register-button'>Kayıt Ol</button>
                )
                : location.pathname === "/register/advisor" ? (
                    <button onClick={registerUser} className='register-button'>Kayıt Ol ve Devam Et</button>
                ) : null
            }
            <p>Zaten bir hesabınız var mı? <Link to="/login" >Giriş Yap</Link></p>
        </div>
      <KVKK display={Kvkk} setKvkk={setKvkk} />  
    </div>
  )
}

export default Register;