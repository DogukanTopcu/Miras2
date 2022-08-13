import React, { useState } from 'react';
import "./advisor.css";

import { Rating } from 'react-simple-star-rating'
import Abilities from '../../components/AdvisorDetail/Abilities';
import Comments from '../../components/AdvisorDetail/Comments';

const Advisor = ({ advisor }) => {
    const [rating, setRating] = useState(0) // initial rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
    const fillColorArray = [
      '#f17a45',
      '#f17a45',
      '#f19745',
      '#f19745',
      '#f1a545',
      '#f1a545',
      '#f1b345',
      '#f1b345',
      '#f1d045',
      '#f1d045'
    ]

  return (
    <div className='advisor-detail'>
        <div className='container advisor-top-contnet'>
            <div className='advisor-top-content-left'>
                <img src={advisor.image} />
                <div className='advisor-top-content-left-desc'>
                    <h2>{advisor.name}</h2>
                    {/* <h4>Uzmanlık Alanı:</h4>
                    <p>{advisor.title}</p>
                    <h4>Şehir:</h4>
                    <p>İzmir</p> */}
                    <p>Quis sit laboris non exercitation laborum sunt anim mollit ullamco esse enim aute officia incididunt. Ad ad aliqua laboris proident culpa quis aliqua aliquip quis ad nulla aliquip. Et ex officia irure ipsum fugiat exercitation ex cupidatat.Elit sit irure consectetur anim fugiat ad magna irure est officia velit cupidatat dolor minim. Cillum officia cupidatat veniam est duis occaecat. Nulla aute aliqua sunt in aliquip ullamco reprehenderit adipisicing veniam est ex. Tempor velit aliquip aliqua commodo.</p>
                    <p>Merhaba ben John Doe. ComTech şirketinde frontend web developer olarak görev yapıyorum. İzmir Yüksek Teknıloji Enstitüsü Bilgisayar Mühendisliği mezunuyum. </p>
                </div>
            </div>
            <div className='advisor-top-content-right'>
              <div className='advisor-top-content-right-infos'>
                <p>Email: dogukantopcu35@gamil.com</p>
                <p>Uzmanlık Alanı: Bilgisayar Mühendisi</p>
                <p>Şehir: İzmir</p>
                <p>Eğitim: İzmir Yüksek Teknoloji Enstitüsü Bilgisayar Mühendisliği</p>
                <Rating 
                    onClick={handleRating} 
                    ratingValue={rating} 
                    allowHalfIcon
                    transition
                    size={30}
                    fillColorArray={fillColorArray}
                    iconsCount={5}
                    // readonly={true} -> Sadece yıldız sayısını gösterir
                    allowHover={false}
                    // tooltipDefaultText={rating}
                />
              </div>
            </div>
        </div>

        <div className='container advisor-bottom-content'>
          <h1>Yeterlilikler ve Hesaplar</h1>
          <Abilities />
          <Abilities />
          <Abilities />
        </div>

        <div className='container advisor-comment-content'>
          <Comments />
        </div>
    </div>
  )
}

export default Advisor