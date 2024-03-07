import React from "react";
import "./Footer.css";
import wave1 from "../../img/wave1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave1} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rajumamsai8221@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
        
          <a href="https://github.com/Rajkumar4031">
          <Gitub color="white" size={"3rem"} />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
