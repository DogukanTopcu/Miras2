import React, { useEffect, useState } from 'react';
import "./miras.css";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Advisor from '../AdvisorCard/Advisor';

// TEMP
import data from "../../data";
import { useNavigate } from 'react-router-dom';

const Miras = () => {
    
    // For Carousel --------------------------------------
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    const navigation = useNavigate();

  return (
    <div className='miras'>
        <div className='container miras-content'>
            <h1>Miras Eğitim</h1>
            <h4>En büyük miras, eğitimdir!</h4>

            <div className='init-buttons'>
                <button onClick={() => navigation("/register/user")}>Alanında Uzman Ara <ArrowForwardIosIcon /></button>
                <button onClick={() => navigation("/register/advisor")}>Alanında Uzman Olarak İlan Ver <ArrowForwardIosIcon /></button>
            </div>

            <h3>İlk Dersiniz Miras'tan</h3>

            <div className='init-vip'>
                <h2>Haftanın VIP Uzmanları: </h2>
                
                <div className='init-carousel carousel-container'>
                    {
                        people.map((person) => {
                            const {id} = person;

                            return (
                                <Advisor key={id} person={person} />                  
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Miras