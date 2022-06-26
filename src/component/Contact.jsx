import React from "react";
import imgGetInTouch from "../images/Get in touch-cuate.png";

const Contact = () => {
  return (
    <div>
      <div className="contact-cont">
        <img src={imgGetInTouch} alt="£j"></img>
        <div className="text-contact">
          <p>
            You can call me on{": "}
            <a style={{ color: "green" }} href="tel:+447459555347">
              07459555347
            </a>{" "}
          </p>
          <p>
            Or through email{": "}
            <a style={{ color: "green" }} href="mailto:19abudl97@gmail.com">
              19abudl97@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
