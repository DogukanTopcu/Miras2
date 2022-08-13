import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Advisor from '../../components/AdvisorCard/Advisor';
import Banner from '../../components/Home/Banner';

import "./home.css";

import data from "../../data";

const Home = () => {
    const [people, setPeople] = useState(data);
  return (
    <div>
      <Banner />

      <div className='advisors'>
        <div className='container advisors-content'>
          <div className='vip-advisors'>
            <h2>Miras Eğitim'in VIP Uzmanları: </h2>
            <div className='home-carousel home-carousel-container'>
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
          <div className='non-vip-advisors'>
            <h2>Miras Eğitim'in Uzmanları: </h2>
            <div className='all-advisors'>
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
    </div>
  )
}

export default Home