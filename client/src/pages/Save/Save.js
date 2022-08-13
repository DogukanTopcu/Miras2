import React from 'react';
import "./save.css";

import Advisor from "../../components/AdvisorCard/Advisor";

import data from "../../data";

const Save = () => {
  return (
    <div className='save'>
        <div className='container save-content'>
            <h1>Kayıtlı Uzmanlar</h1>
            <div className='saved-users'>
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
                <Advisor person={data[3]} />
            </div>
        </div>
    </div>
  )
}

export default Save