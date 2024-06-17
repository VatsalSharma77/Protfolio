import "./Navbar.css";
import { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg"
import theme_pattern from "../../assets/theme_pattern.svg";
import menu_open from "../../assets/menu_open.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_close from "../../assets/menu_close.svg";
const Navbar = () => {

  const [activeNav, setActiveNav] = useState('home');
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return <div className="navbar">
    <div className="navbar-name">
      <h1>VATsAL</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <img onClick={openMenu} src={menu_open} alt="" className="nav-mob-open" />
    <ul ref={menuRef} className="nav-menu">
      <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
      <li> <AnchorLink className="anchor-link" href="#home" ><p onClick={() => setActiveNav("home")}>Home</p></AnchorLink> {activeNav == "home" ? <img src={underline} alt="" /> : ""}</li>
      <li> <AnchorLink className="anchor-link" offset={50} href="#about" ><p onClick={() => setActiveNav("about")}>About Me</p></AnchorLink> {activeNav == "about" ? <img src={underline} alt="" /> : ""}</li>
      <li> <AnchorLink className="anchor-link" offset={50} href="#skill" ><p onClick={() => setActiveNav("skills")}>Skills</p></AnchorLink> {activeNav == "skills" ? <img src={underline} alt="" /> : ""}</li>
      <li> <AnchorLink className="anchor-link" offset={50} href="#work" > <p onClick={() => setActiveNav("projects")}>Projects</p></AnchorLink>{activeNav == "projects" ? <img src={underline} alt="" /> : ""}</li>
      <li> <AnchorLink className="anchor-link" offset={50} href="#contact" > <p onClick={() => setActiveNav("contact")}>Contact</p></AnchorLink>{activeNav == "contact" ? <img src={underline} alt="" /> : ""}</li>
    </ul>
    <div className="nav-connect">
      <AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With Me </AnchorLink>
    </div>
  </div>;
};

export default Navbar;
