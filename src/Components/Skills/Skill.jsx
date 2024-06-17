import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import html_logo from '../../assets/HTML-removebg-preview.png'
import css_logo from '../../assets/css-removebg-preview.png'
import js_logo from '../../assets/JavaScript-logo.png'
import react_logo from '../../assets/react-removebg-preview.png'
import mongodb_logo from '../../assets/mongodb-removebg-preview.png'
import express_logo from '../../assets/express-removebg-preview.png'
import node_logo from '../../assets/node-removebg-preview.png'
import chakra_logo from '../../assets/chakra-removebg-preview.png'
import tailwind_logo from '../../assets/tailwind-removebg-preview.png'
import redux_logo from '../../assets/redux-removebg-preview.png'
import git from "../../assets/git.png"
import vs_code from "../../assets/vs-code-removebg-preview.png"
import thunder from "../../assets/thunderClient-removebg-preview.png"
const Skill = () => {
    return (
        <div id="skill" className="skill">
            <div className="skill-title">
                <h1>Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='skill-techstack-container'>
                <div className="skill-techstack-list-row">
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={html_logo} alt="" />
                            <span>HTML</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={css_logo} alt="" />
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={js_logo} alt="" />
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={react_logo} alt="" />
                            <span>React</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={node_logo} alt="" />
                            <span>Node</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={express_logo} alt="" />
                            <span>Express</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={mongodb_logo} alt="" />
                            <span>MongoDB</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={chakra_logo} alt="" />
                            <span>Chakra UI</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={tailwind_logo} alt="" />
                            <span>Tailwind</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={redux_logo} alt="" />
                            <span>Redux</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="skill-title">
                <h1>Tools</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='skill-techstack-container'>
                <div className="tool-techstack-list-row">
                   
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={git} alt="" />
                            <span>Git</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={vs_code} alt="" />
                            <span>VS Code</span>
                        </div>
                    </div>
                    <div className="skill-techstack-bar">
                        <div className="skill-techstack-info">
                            <img src={thunder} alt="" />
                            <span>Thunder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill