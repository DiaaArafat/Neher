import React from "react";
import "./Card.scss";


function Card({ card, title, fade,img }) {
  return (
    <a className="serviceLink" href="https://www.w3schools.com">
    <div data-aos={fade} data-aos-duration="2000">
      <div class="card">
        <img
          className="avatar-img"
          src={require("../../asseets/images/unnamed.jpg")}
          alt="not-found"
        />
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui
          non quis, aut eveniet molestiae accusamus.
        </p>
      </div>
    </div>
    </a>
  );
}

export default Card;
