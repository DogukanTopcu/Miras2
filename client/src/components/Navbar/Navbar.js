import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
    const location = useLocation();
    const navigation = useNavigate();
  return (
    <div className='navbar'>
        <div className='container navbar-content'>
            <div className='navbar-content-left'>
                <h1>Miras Eğitim</h1>
            </div>
            <div className='navbar-content-right'>
                {
                    location.pathname === "/" || location.pathname === "/register/user" || location.pathname === "/register/advisor" ? (
                        <button onClick={() => navigation("/login")}>Giriş Yap</button>
                    ) 
                    : location.pathname === "/home/advisor" && location.search === "" ? (
                        <button>Giriş Yap</button>
                    )
                    : location.pathname === "/home" ? (
                        <button>Çıkış Yap</button>
                    ) 
                    : location.pathname === "/admin" ? (
                        <button>Admin Hoşgeldin</button>
                    )
                    : location.pathname === "/login" ? (
                        <button onClick={() => navigation("/")}>Kayıt Ol</button>
                    )
                    : (
                        null
                    )
                    
                    
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar