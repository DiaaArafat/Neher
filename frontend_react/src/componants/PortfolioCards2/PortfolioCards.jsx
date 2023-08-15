import React from "react";
import "./PortfolioCards.scss";
import FilledButton from "../FilledButton/FilledButton";
import Blur from "react-blur";
import InstagramButton from "../InstagramButton/InstagramButton";
import { useState } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
function PortfolioCards({ duration, title, trailer,img }) {
  const [showVideo, setShowVideo] = useState(false); // Add this state

  return (
    <div
      class="containerP"
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration={duration}
    >
      <div class="cardP">
        <div class="face back">
          <div class="contentP">
            <h1 class="descH">{title}</h1>
            <div className="cardP-buttons">
              <a href={trailer} className="social-button trailer">
                <BsFillCameraVideoFill className="icon" /> <h6>Trailer</h6>{" "}
              </a>
              <a href="" className="social-button trailer">
                <AiOutlineEye className="icon" /> <h6>Info</h6>
              </a>
            </div>
            <InstagramButton />
          </div>
        </div>
        <img
          class="face front PortfolioImage"
          src={img}
          alt="Image Load Error"
        ></img>
      </div>
    </div>
  );
}

export default PortfolioCards;
