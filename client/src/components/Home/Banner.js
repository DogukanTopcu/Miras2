import React, { useState } from 'react';
import "./banner.css";

import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';

const Banner = () => {
    const [advisorSearch, setAdvisorSearch] = useState({
        name: "",
        location: "",
        major: ""
    })
  return (
    <div className='banner'>
        <div className='banner-tone container'>
            <div className='banner-content'>
                <div className='banner-left'>
                    <div className='name-input'>
                        <input 
                            placeholder="Miras Eğitim'de Ara" 
                            value={advisorSearch.name} 
                            onChange={e => setAdvisorSearch({ ...advisorSearch, name: e.target.value})}
                            type="text" 
                        />
                        <SearchIcon className='searchbar-icon' />
                    </div>

                    <div className='other-inputs'>
                        <div className='major-input'>
                            <input placeholder='Uzmanlık Alanı' value={advisorSearch.major} onChange={e => setAdvisorSearch({ ...advisorSearch, major: e.target.value})} />
                            <SchoolIcon className='searchbar-icon' />
                        </div>
                        <div className='location-input'>
                            <input placeholder='Şehir' value={advisorSearch.location} onChange={e => setAdvisorSearch({ ...advisorSearch, location: e.target.value})} />
                            <LocationCityIcon className='searchbar-icon' />
                        </div>
                    </div>
                    <button className='banner-filter'>Filtrele</button>

                </div>
                <div className='banner-right'>
                    <h1>Miras Eğitim</h1>
                    <h4>En büyük miras, eğitimdir!</h4>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner