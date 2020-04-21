import React from 'react';
import Button from './button';
import Image from "./image";
import CV from "../images/OBEKE CHUKWUDALU CALISTUS.pdf";

import './layout.css';

const About = () => (
    <section id="about">
        <div className="about-img">
            <Image />
        </div>
        <div className="about-content">
            <h2 className="about-heading">Who I Am</h2>
            <div className="about-info-container">
                <p className="about-info">
                    A fast growing talented developer with experience in building visually appealing 
                    interfaces using suitable web technologies and following best practices.
                </p>
                <p className="about-info">
                    Working experience  with the following programming tools 
                    <abbr title="Hypertext Markup Language">HTML5</abbr>, 
                    <abbr title="Cascading Style Sheets">CSS3</abbr>, 
                    <abbr title="Accessible Rich Internet Application">ARIA</abbr>, 
                    <abbr title="Leaner Style Sheets">LESS</abbr>, Bootstrap, Flexbox, Javascript,
                    Typescript, Angular, React, 
                    <abbr title="Command Line Interface">CLI</abbr>, GIT/Github.<br />
                    I'm experienced in building RESTFUL API, understanding of responsiveness design,
                     and web standards
                </p>
                <p className="about-info"> 
                    Looking foward for a challenging and rewarding career in a dynamic organization. 
                    Striving for excellence in results at all times toward attaining maximum productivity
                    and accomplishing organization goals.
                </p>
            </div>
            <Button href={CV} download="download">Download my Resume</Button>
        </div>
    </section>
)

export default About;