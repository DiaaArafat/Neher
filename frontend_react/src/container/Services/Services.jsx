import React from 'react'
import './Services.scss'
import { useEffect } from 'react';
import Card from '../../componants/Card/Card';
import AnimationIcon from '../../asseets/images/unnamed.jpg';

import ProductionIcon from '../../asseets/images/unnamed.jpg';
function Services() {
  useEffect(() => {
    window.AOS.init();
  }, []);
  const card = 'card';
  return (

    <div className='servicesMain'>
        <h1 className='servicesHeader' data-aos="fade-down" >Services</h1>
        <div className='serviceCards'>
          <Card card={card} title={"Animasyon"} fade={"fade-right"} img={AnimationIcon}/>
          <Card card={card} title={"Prodüksiyon"} fade={"fade-up"} imxg={AnimationIcon}/>
          <Card card={card} title={"Belgese"}  fade={"fade-left"} img={ProductionIcon}/>
        </div>
    </div>
  )
}

export default Services