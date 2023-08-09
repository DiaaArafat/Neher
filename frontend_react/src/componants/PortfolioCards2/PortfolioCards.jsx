import React from "react";
import "./PortfolioCards.scss";
import FilledButton from "../FilledButton/FilledButton";
import InstagramButton from "../InstagramButton/InstagramButton";
import { useState } from "react";
import {BsFillCameraVideoFill} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
function PortfolioCards({duration}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div class="containerP"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    data-aos="flip-left"
    data-aos-easing="linear"
    data-aos-duration={duration}
    
    >

      <div class="cardP">
        <div class="face back">
          <div class="contentP">
            <h1 class="descH">Akıncı Çizgi Dizi</h1>
            <div className="cardP-buttons">
            <a href="" className="social-button trailer"><BsFillCameraVideoFill className="icon" /> <h6>Trailer</h6> </a>
            <a href="" className="social-button trailer"><AiOutlineEye className="icon"/> <h6>Info</h6></a>
            </div>
            <InstagramButton />

          </div>
        </div>
        <img
          class="face front PortfolioImage"
          src={require("../../asseets/images/Site-background-light.webp")}
          alt="poste not found"
        ></img>
      </div>
    </div>
  );
}

export default PortfolioCards;
