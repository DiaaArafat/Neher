import React from 'react'
import './Clients.scss'
import SmallCard from '../../componants/SmallCard/SmallCard'
function Clients() {
  return (
    <div className='clients-container' >
        <h1 data-aos="fade-down" data-aos-duration="1200">Our <span>Clients</span></h1>
        <h5 data-aos="fade-down" data-aos-duration="1200">We did a great job with these companies !</h5>
        <div className='cards-container'data-aos="fade-right" data-aos-duration="1200" >
        <SmallCard />
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        </div>
    </div>
  )
}

export default Clients