import React from 'react'
import './Footer.scss'
import SocialMedia from '../../componants/SocialMedia/SocialMedia'
function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <div className='footer-container' 
    data-aos-anchor-placement="top-bottom" >
        <SocialMedia/>
        <div className='footer-contact'>
        <h5>Email : neher@gmail.com</h5>
        <h5>Telephone : +903391331</h5>
        <h5>&copy; {currentYear} Neher Production. All rights reserved</h5>
        </div>
    </div>
  )
}

export default Footer