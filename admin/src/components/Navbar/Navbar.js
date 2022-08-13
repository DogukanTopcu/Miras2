import React from 'react';
import "./navbar.css";

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className='navbar'>
        <div className='navbar-content'>
            <div className='navbar-left'>
                <div onClick={() => setSidebarOpen(true)}><MenuIcon /></div>
                <h1>Miras Eğitim</h1>
            </div>
            <div className='navbar-right'>
                <p>Topçu</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar