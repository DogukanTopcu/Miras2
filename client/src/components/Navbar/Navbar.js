import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./navbar.css";

import { useSelector } from "react-redux";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();
    const navigation = useNavigate();

    const user = useSelector((state) => state.user);

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
                    : location.pathname === "/home" || location.pathname === "/saves" ? (
                        // <button>Çıkış Yap</button>
                        <div className='navbar-right'>
                            <Link className='saved-icon' to="/saves"><BookmarkIcon /></Link>
                            {
                                user.advisor === "normal" ? (
                                    <div className='navbar-dropdown'>
                                        <div>Normal Uzman İlanı <ArrowDropDownIcon /></div>
                                        <div className='navbar-right-dropdown'>
                                            <a><div></div></a>
                                        </div>
                                    </div>
                                ) : 
                                user.advisor === "vip" ? (
                                    <div className='navbar-dropdown'>
                                        <div>VIP Uzman İlanı <ArrowDropDownIcon /></div>
                                        <div className='navbar-right-dropdown'>
                                            <a><div></div></a>
                                        </div>
                                    </div>
                                ) :
                                user.advisor === "weeklyVip" ? (
                                    <div className='navbar-dropdown'>
                                        <div>Haftanın VIP'si <ArrowDropDownIcon /></div>
                                        <div className='navbar-right-dropdown'>
                                            <a><div></div></a>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <div onClick={() => setDropdown(!dropdown)} className='navbar-dropdown'>
                                        <div className='dropdown-button uzman-ilan-bg'>Uzman İlanı Ver</div>
                                        <KeyboardArrowDownIcon style={{color: "#fff"}} />
                                        {
                                            dropdown ? (
                                                <div className='navbar-right-dropdown'>
                                                    <div className='dropdown-button uzman-ilan-bg'>Uzman İlanı Ver</div>
                                                    <div className='dropdown-button cikis-bg'>Çıkış Yap</div>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                )
                            }
                        </div>
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