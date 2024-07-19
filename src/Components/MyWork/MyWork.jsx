import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";
import live from "../../assets/live.svg";
import github from "../../assets/github.svg";
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="work" key={index}>
              <h1 className="w_name_head">{work.w_name}</h1>
              <img src={work.w_img} alt="" />
              <div className="mywork-para">
                <h2>{work.w_name}</h2>
                <p>{work.w_desc}</p>
                <div className="live-links">
                  <a href={work.w_link} target="_blank" rel="noreferrer">
                    <img src={live} alt="" />
                  </a>
                  <a href={work.w_github} target="_blank" rel="noreferrer">
                    <img src={github} alt="" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
