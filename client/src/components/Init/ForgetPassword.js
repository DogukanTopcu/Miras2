import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../actions/Users';
import "./forgetPass.css";

const ForgetPassword = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [urlEmail, setUrlEmail] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (email === "") {
            setUrlEmail("");
            navigation("/forget-my-password")
        }
    }, [email])
  return (
    <div className='forgetPass'>
        <div className='forgetPass-top'>
            <h2 className='forgetPass-top-title'>Şifremi Unuttum</h2>
            <h2 className='forgetPass-top-miras'>Miras Eğitim</h2>
        </div>
        <center><div className='forgetPass-line'></div></center>
        <p className='forgetPass-desc'>Emailinize bir mail ve bu mail içerisinde bir kod ile bağlantı linki göndereceğiz. Bu bağlantı linkine tıklayarak mailinize göndermiş olduğumuz kod ile yeni oluşturmak istediğiniz şifreyi girip onaylayarak yeni şifrenizi kullanmaya başlayabileceksiniz.</p>
        <div className='forgetPass-inputs'>
            <TextField required  sx={{ m: "15px 0", width: '100%' }} fullWidth label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className='forgetPass-bottom'>
            <button onClick={() => {
                navigation(`/forget-my-password?email=${email}`);
                setUrlEmail(email);
                dispatch(forgetPassword(email));
            }} className='forgetPass-button'>Mail Gönder</button>
            {
                location.search === `?email=${urlEmail}` && email !== "" ? (
                    <p>Mailiniz Gönderilmiştir! Lütfen mail kutunuza bakınız.</p>
                ) : null
            }

        </div>
    </div>
  )
}

export default ForgetPassword