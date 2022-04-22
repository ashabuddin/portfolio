import React from 'react'
import "./Footer.css"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey, my name is Ashab Uddin. I am a Full-Stack Developer.
                </Typography>
                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/ashabuddin/" target="black">
                    <BsGithub />
                </a>
                <a href="https://www.instagram.com/ashab3230/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/ashab-uddin-937a34206/" target="black">
                    <BsLinkedin />
                </a>
            </div>

        </div>
    )
}

export default Footer