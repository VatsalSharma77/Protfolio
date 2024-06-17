import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.JPG";
import { useState } from "react";

const About = () => {
  const [about, setAbout] = useState("experience");
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a skilled MERN stack web developer with strong expertise in both frontend and backend development. My proficiency in MongoDB, Express.js, React, and Node.js enables me to create robust and scalable web applications that deliver seamless user experiences. I excel in designing intuitive interfaces with React and implementing efficient server-side logic with Node.js and Express.js. </p>
            <p>My ability to manage and optimize databases using MongoDB ensures data integrity and performance. Committed to continuous learning and innovation, I thrive in collaborative team environments and am passionate about leveraging my technical skills to drive project success.</p>
          </div>
          <div className="tab-titles-education">
            <ul>
              <li onClick={() => setAbout("experience")}> <p className={about === "experience" ? "active" : ""} >Experience</p>
              </li>
              <li onClick={() => setAbout("education")}> <p className={about === "education" ? "active" : ""} >Education</p></li>
            </ul>
          </div>
          <div className="tab-titles-details">
            {about === "experience" ? <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>January 2023 - May 2023</span><br />- Internship at Adani
                  Power Rajasthan Ltd.
                </li>
                <li>
                  <span>June 2020 - August -2020</span><br />- Internship at Kota
                  Super Thermal Power Plant
                </li>
              </ul>
            </div> : <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>August 2023 - Present</span><br />- Career Accelerator
                  Program at Prepleaf by Masai
                </li>
                <li>
                  <span>August 2019 - June 2023</span><br />- Bachelor of
                  technology (Electrical Engineering) from Amritsar College of
                  Engineering and Technology, Amritsar
                </li>
                <li>
                  <span>April 2017 - April 2019</span><br />- Higher Secondary
                  Education Maa Bharti Senior Secondary School, Kota
                </li>
              </ul>
            </div>}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
