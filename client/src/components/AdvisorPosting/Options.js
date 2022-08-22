import React from 'react';
import "./options.css";

import StarIcon from '@mui/icons-material/Star';

const Options = () => {
  return (
    <div className='options'>
        <div className='option-card options-normal'>
            <div className='option-card-top'>
                <p>0 TL</p>
                <div className='normal-star'><StarIcon /></div>
            </div>
            <h2>Uzman İlanı</h2>
        </div>
        <div className='option-card options-VIP'>
            <div className='option-card-top'>
                <p>85 TL</p>
                <div className='vip-star'><StarIcon /></div>
            </div>
            <h2>VIP Uzman İlanı</h2>
        </div>
        <div className='option-card options-weeklyVIP'>
            <div className='option-card-top'>
                <p>30 TL</p>
                <div className='week-star'><StarIcon /></div>
            </div>
            <h2>Haftanın VIP İlanı</h2>
        </div>
    </div>
  )
}

export default Options