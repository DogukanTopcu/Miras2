import React, { useState } from 'react';
import "./home.css";

import { Outlet } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='home'>
        <Navbar setSidebarOpen={setSidebarOpen} />
        {
          sidebarOpen ? (
            <div className='home-sidebar'>
                <Sidebar setSidebarOpen={setSidebarOpen} />
                <div onClick={() => setSidebarOpen(false)} className='close-areas' />
            </div>
          ) : null
        }

        <Outlet />

    </div>
  )
}

export default Home