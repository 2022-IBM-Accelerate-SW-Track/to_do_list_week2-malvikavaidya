import React, { Component } from "react";
import "./About.css";
import headshot from "../assets/headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={headshot}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Malvika Vaidya</div>
            <div className="brief_description">
               I'm a student at UT Austin studying computer engineering. I like reading, working out, and eating good food!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
