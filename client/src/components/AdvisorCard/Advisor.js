import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./advisor.css";


const Advisor = ({ person, cardSize }) => {
    const navigation = useNavigate()
    const [size, setSize] = useState(cardSize);
  return (
    <div style={{}} onClick={() => navigation(`/advisor?name=${person.name}&id=${person.id}`)} className='advisor'>
        <div className='advisorStatus'></div>
        <img src={person.image} />
        <p>{person.name}</p>
        <p>{person.title}</p>
        <p>İzmir</p>
    </div>
  )
}

export default Advisor