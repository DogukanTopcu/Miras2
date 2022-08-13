import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./forgetPass.css";

const ForgetPassword = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [urlEmail, setUrlEmail] = useState("");

    useEffect(() => {
        if (email === "") {
            setUrlEmail("");
            navigation("/forget-my-password")
        }
    }, [email])
  return (
    <div className='forgetPass'>
        <div className='forgetPass-top'>
            {
                location.pathname === "/new-password" ? (
                    <h2 className='forgetPass-top-title'>Şifren Yenilendi</h2>
                ) :
                location.pathname === "/register/user" ? (
                    <h2 className='forgetPass-top-title'>Kayıt</h2>
                ) : 
                location.pathname === "/register/advisor" ? (
                    <h2 className='forgetPass-top-title'>Kayıt</h2>
                ) : null
            }
            
            <h2 className='forgetPass-top-miras'>Miras Eğitim</h2>
        </div>
        <center><div className='forgetPass-line'></div></center>

        {
            location.pathname === "/new-password" ? (
                <p className='forgetPass-desc'>Yeni şifreniz oluşturulmuştur. Devam etmek için giriş yapınız</p>
            ) :
            location.pathname === "/register/user" ? (
                <p className='forgetPass-desc'></p>
            ) : 
            location.pathname === "/register/advisor" ? (
                <p className='forgetPass-desc'></p>
            ) : null
        }

        <div className='forgetPass-bottom'>
            <button onClick={() => {
                navigation(`/forget-my-password?email=${email}`);
                setUrlEmail(email);
            }} className='forgetPass-button'>Mail Gönder</button>

        </div>
    </div>
  )
}

export default ForgetPassword