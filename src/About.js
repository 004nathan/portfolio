import React from "react";
import Style from "./App.module.css";

export default function About() {
  return (
    <div className={`${Style.aboutContainer} ${Style.animationTop}`}>
      <div className={Style.headingDiv}>
        <h1>About Me</h1>
        <div className={Style.borderAbout}></div>
      </div>
      <div className={Style.infodiv}>
        <div
          id={Style.myProfile}
          style={{ backgroundImage: `url('../assets/parvathiNadhan.png')` }}
        ></div>
        <div className={Style.aboutTextDiv}>
    
          <h4>
            Frontend Developer who creates amazing user experiences!
          </h4>
          <p>
          
       <li>   I'm Parvathi Nathan, a front-end developer. My uniqueness lies in logical thinking, designing, and end-to-end user perspective, which motivates me to take an interest in my work.</li>

       <li>I am also interested in creating apps using low-code platforms like Zoho Creator and creating commands,schedulers, and threads in Zoho Cliq. I enjoy exploring various web applications as well.</li>

       <li>Thank you!</li>
          </p>
        </div>
      </div>
      <div className={Style.borderInfo}></div>
    </div>
  );
}
