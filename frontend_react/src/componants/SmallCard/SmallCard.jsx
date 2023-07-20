import React from "react";
import "./SmallCard.scss";
function SmallCard() {
  return (
    
    <div class="smallCardContainer" >
              <img
          src={require("../../asseets/images/trt-world.png")}
          className="client-logo"
          alt="logo not found"
        ></img>
      <div class="tool-box">

        <lable class="btn-close">×</lable>
      </div>
    </div>

  );
}

export default SmallCard;
