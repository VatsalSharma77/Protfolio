import "./Header.css";
import profile_img from "../../assets/profile_img.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import resume from "../../assets/VatsalSharma-FullStackWebDeveloper-Resume.pdf"
const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' Frontend Developer. ', '  MERN Stack Developer. ' ],
      typeSpeed: 80,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="home" className="header">
      <img src={profile_img} alt="" />
      <h1>
        Hi, My name is
        <span> Vatsal Sharma </span>
        and I am a  <span ref={el} />

      </h1>
      <p>I am a proficient Full-Stack Developer with extensive experience in the MERN (MongoDB, Express.js, React, Node.js) stack, specializing in both frontend and backend development. </p>
      <div className="head-action">
        <div className="head-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With Me </AnchorLink></div>
        <div className="head-resume"><a href={resume} download="VatsalSharma-FullStackWebDeveloper-Resume">My Resume</a></div>
      </div>
    </div>
  );
};

export default Header;
