import "./Header.css";
import profile_img from "../../assets/profile_img.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import resume from "../../assets/Vatsal-Sharma-Resume.pdf"
const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' Frontend Developer. ', '  MERN Stack Developer. '],
      typeSpeed: 80,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();

    window.open(resume, '_blank');

    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Vatsal-Sharma-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="header">
      <img src={profile_img} alt="" />
      <h1>
        Hi, My name is
        <span> Vatsal Sharma </span>
        and I am a  <span ref={el} />

      </h1>
      <div className="head-action">
        <div className="head-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With Me </AnchorLink></div>
        <div className="head-resume">
          <a href={resume} onClick={handleResumeClick}>
            My Resume
            </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
