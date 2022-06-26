import React from "react";
import success from "../images/Success factors-amico.png";

const About = () => {
  return (
    <div id="landing-container">
      <div className="div-home" style={{ width: "" }}>
        <div className="center-photo-text">
          <h3>
            I built this app as a front-end final project in
            <a
              target={"_blank"}
              style={{ color: "#ba68c8" }}
              href="https://northcoders.com/"
              rel="noreferrer"
            >
              {" "}
              Northcoders
            </a>
            's bootcamp that I've done.
          </h3>
        </div>
      </div>
      <img className="img-home" src={success} alt="home page"></img>
    </div>
  );
};

export default About;
