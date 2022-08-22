import React from 'react';
import "./registerFeed.css";

import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useLocation, useNavigate } from 'react-router-dom';

const RegisterFeed = () => {
    const navigaition = useNavigate();
    const location = useLocation();
  return (
    <>
        {
            location.pathname == "/register/user/feed" ? (
                <div className='registerFeed'>
                    <div className='registerFeed-top'>
                        <h2 className='registerFeed-top-title'>Kayıt İşlemi Tamamlandı</h2>
                        <h2 className='registerFeed-top-miras'>Miras Eğitim</h2>
                    </div>
                    <center><div className='registerFeed-line'></div></center>
                    <div className='registerFeed-content'>
                        <DoneAllIcon style={{ color: "#6b3600", fontSize: "96px", margin: "20px 0" }} />
                        <p>Kayıt işleminiz başarıyla tamamlandı. Ana sayfaya dönebilir ve birbirinden değerli danışmanlarımızı keşfe başlayabilirsiniz...</p>
                        <p>Lütfen mailinize gönderilen <strong>doğrulama mailini</strong> onaylayınız</p>
                    </div>
                    
                    <div className='registerFeed-proccess-buttons'>
                        <button onClick={() => navigaition("/home")} className='registerFeed-button'>Ana Sayfaya Git</button>
                    </div>
                </div>
            )
            : location.pathname == "/register/advisor/feed" ? (
                <div className='registerFeed'>
                    <div className='registerFeed-top'>
                        <h2 className='registerFeed-top-title'>Kayıt İşlemi Tamamlandı</h2>
                        <h2 className='registerFeed-top-miras'>Miras Eğitim</h2>
                    </div>
                    <center><div className='registerFeed-line'></div></center>
                    <div className='registerFeed-content'>
                        <DoneAllIcon style={{ color: "#6b3600", fontSize: "96px", margin: "20px 0" }} />
                        <p>Kayıt işleminiz başarıyla tamamlandı. Uzman ilanı vermek için devam et butonuna tıklayınız</p>
                        <p>Lütfen mailinize gönderilen <strong>doğrulama mailini</strong> onaylayınız</p>
                    </div>
                    
                    <div className='registerFeed-proccess-buttons'>
                        <button onClick={() => navigaition("/home")} className='registerFeed-button'>Devam Et</button>
                    </div>
                </div>
            ) : null
        }
    </>
  )
}

export default RegisterFeed