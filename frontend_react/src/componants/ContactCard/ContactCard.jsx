import React from "react";
import "./ContactCard.scss";
function ContactCard() {
  return (
    <div class="contact-card" data-aos="zoom-in" data-aos-duration="1000">
      <span class="title"></span>
      <form class="form">
        <div class="group">
          <input placeholder="‎" type="text" required=""></input>
          <label for="name">Name</label>
        </div>
        <div class="group">
          <input
            placeholder="‎"
            type="email"
            id="email"
            name="email"
            required=""
          ></input>
          <label for="email">Email</label>
        </div>
        <div class="group">
          <input
            placeholder="‎"
            type="email"
            id="email"
            name="email"
            required=""
          ></input>
          <label for="email">Subject</label>
        </div>
        <div class="group">
          <textarea
            placeholder="‎"
            id="comment"
            name="comment"
            rows="5"
            required=""
          ></textarea>
          <label for="comment">Message</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactCard;
