import React, { useState } from 'react';
import "./login.css";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigation = useNavigate();
    
    const [showPass, setShowPass] = useState(false);
    const [type, setType] = useState("password");

    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    });
    
  return (
    <div className='login'>
        <div className='container login-content'>
            <h1>Miras Eğitim Admin Giriş</h1>
            <div className='login-form'>
                <div className='login-top'>
                    <h2 className='login-top-title'>Admin Giriş</h2>
                    <h2 className='login-top-miras'>Miras Eğitim</h2>
                </div>
                <center><div className='login-line'></div></center>
                <div className='login-inputs'>
                    <input className='login-input' placeholder='Email' type="email" value={admin.email} onChange={e => setAdmin({ ...admin, email: e.target.value })} />
                    <div className='password-input'>
                        <input className='login-input' placeholder='Şifre' type={`${type}`} value={admin.password} onChange={e => setAdmin({ ...admin, password: e.target.value })} />
                        {/* {
                            showPass ? <input className='login-input' placeholder='Şifre' type="text" value={admin.password} onChange={e => setAdmin({ ...admin, password: e.target.value })} /> : <input className='login-input' placeholder='Şifre' type="password" value={admin.password} onChange={e => setAdmin({ ...admin, password: e.target.value })} />
                        } */}
                        {
                            showPass ? <VisibilityOffIcon onClick={() => {setShowPass(!showPass); setType("password");}} className='password-icon' /> : <VisibilityIcon onClick={() => {setShowPass(!showPass); setType("text");}} className='password-icon' />
                        }
                    </div>
                </div>
                <button onClick={() => navigation("/home")} className='login-button'>Giriş Yap</button>
            </div>
        </div>
    </div>
  )
}

export default Login