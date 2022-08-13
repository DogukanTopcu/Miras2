import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ setSidebarOpen }) => {
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div><CloseIcon className='close-icon' onClick={() => setSidebarOpen(false)} /></div>
            <Link to="/home" className='sidebar-link'>Ana Sayfa</Link>

            <p className='sub-title'>Kullanıcı Hareketleri</p>
            <Link to="/home" className='sidebar-link'>Yeni Kullanıcılar</Link>
            <Link to="/home" className='sidebar-link'>Uzman İlanı Başvuruları</Link>
            <Link to="/home" className='sidebar-link'>Yeni Uzmanlar</Link>
            <Link to="/home" className='sidebar-link'>Yeni VIP Uzman İlanları</Link>
            <Link to="/home" className='sidebar-link'>Yeni Haftanın VIP Uzman İlanları</Link>

            <p className='sub-title'>Kullanıcı İşlemleri</p>
            <Link to="/home" className='sidebar-link'>Kayıtlı Kullanıcılar</Link>
            <Link to="/home" className='sidebar-link'>Uzman İlanları</Link>

            <p className='sub-title'>Mail Gönderme</p>
            <Link to="/home" className='sidebar-link'>Gönderilmiş Tüm Mailler</Link>
            <Link to="/home" className='sidebar-link'>Toplu Mail Gönder</Link>
            <Link to="/home" className='sidebar-link'>Kişiye Özel Mail Gönder</Link>

            <p className='sub-title'>Site Ayarlari</p>
            <Link to="/home" className='sidebar-link'>Arkaplan Resmi</Link>
            <Link to="/home" className='sidebar-link'>Footer'daki yazılar</Link>

            <p className='sub-title'>Admin</p>
            <Link to="/home" className='sidebar-link'>Adminler</Link>
            <Link to="/home" className='sidebar-link'>Yeni Admin Ekle</Link>

        </div>
    </div>
  )
}

export default Sidebar