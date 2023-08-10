import React from "react";
import "./PortfolioCards.scss";
import FilledButton from "../FilledButton/FilledButton";
import Blur from "react-blur";
import InstagramButton from "../InstagramButton/InstagramButton";
import { useState } from "react";
import {BsFillCameraVideoFill} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
function PortfolioCards({duration}) {
  const [showVideo, setShowVideo] = useState(false); // Add this state

  return (
    <div class="containerP"
    data-aos="flip-left"
    data-aos-easing="linear"
    data-aos-duration={duration}
    
    >
         {showVideo && (
      <Blur
        className="blur-background"
        enableStyles
        blurRadius={10} // Adjust the blur intensity as needed
      >
        <div className="video-container">
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IHc2vK8taBA"
            frameBorder="0"
            onClick={() => setShowVideo(false)}
            allowFullScreen
          ></iframe>
        </div>
      </Blur>
    )}
      <div class="cardP">
        <div class="face back">
          <div class="contentP">
            <h1 class="descH">Akıncı Çizgi Dizi</h1>
            <div className="cardP-buttons">
            <a href="https://www.youtube.com/watch?v=IHc2vK8taBA" className="social-button trailer"><BsFillCameraVideoFill className="icon" /> <h6>Trailer</h6> </a>
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
