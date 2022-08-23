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
            <div className='features'>
                <p>Özellikler:</p>
                <ul>
                    <li>30 gün boyunca ilanınız yayınlanır.</li>
                    <li>Vereceğiniz ilk ders bedava olmak zorundadır.</li>
                    <li>İlan süresi dahilinde ilanınızı VIP üyeliğine ya da haftalık VIP üyeliğine yükseltilebilir.</li>
                    <li>İlanınızı istediğiniz zaman düzenleyebilirsiniz</li>
                </ul>
            </div>

            <button className='card-button'>Uzman İlanı</button>
        </div>
        <div className='option-card options-VIP'>
            <div className='option-card-top'>
                <p>85 TL</p>
                <div className='vip-star'><StarIcon /></div>
            </div>
            <h2>VIP Uzman İlanı</h2>
            <div className='features'>
                <p>Özellikler:</p>
                <ul>
                    <li>30 gün boyunca ilanınız yayınlanır.</li>
                    <li>Vereceğiniz ilk ders bedava olmak zorunda değildir.</li>
                    <li>İlan süresi dahilinde ilanınız ana sayfada en üstte gözükecektir.</li>
                    <li>İlanınızı istediğiniz zaman düzenleyebilirsiniz.</li>
                    <li>İlanınız ana sayfada diğer ilanlara göre daha büyük gözükecektir.</li>
                </ul>
            </div>

            <button className='card-button'>Uzman İlanı</button>
        </div>
        <div className='option-card options-weeklyVIP'>
            <div className='option-card-top'>
                <p>30 TL</p>
                <div className='week-star'><StarIcon /></div>
            </div>
            <h2>Haftanın VIP İlanı</h2>
            <div className='features'>
                <p>Özellikler:</p>
                <ul>
                    <li>7 gün boyunca ilanınız yayınlanır.</li>
                    <li>Vereceğiniz ilk ders bedava olmak zorunda değildir.</li>
                    <li>Haftalık VIP süresi dolduğunda ilanınız, normal ilan süresindeki kalan gün kadar devam eder.</li>
                    <li>İlanınızı istediğiniz zaman düzenleyebilirsiniz</li>
                </ul>
            </div>

            <button className='card-button'>Uzman İlanı</button>
        </div>
    </div>
  )
}

export default Options