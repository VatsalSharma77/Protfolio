import React from 'react'
import './Footer.css'
import theme_pattern from "../../assets/theme_pattern.svg";

import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-name">
                        <h1>VATsAL</h1>
                        <img src={theme_pattern} alt="" />
                    </div>
                    <p> MERN Stack Developer </p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left" >© 2024 Vatsal Sharma. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer