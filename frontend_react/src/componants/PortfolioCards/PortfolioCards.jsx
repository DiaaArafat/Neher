import React from "react";
import "./PortfolioCards.scss";
import FilledButton from "../FilledButton/FilledButton";
import InstagramButton from "../InstagramButton/InstagramButton";
import { useState } from "react";
function PortfolioCards({delay}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div class="containerP "
    data-aos="flip-left"
    data-aos-duration={delay}
        onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div class="cardP">
        <div class="face back">
          <div class="contentP">
            <h1 class="descH">Akıncı Çizgi Dizi</h1>
            <FilledButton Shape={"Fbutton"} Content={"Learn more"}/>
            <FilledButton Shape={"SmallFbutton"} Content={"Trailer"} />
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
