import React from 'react';
import ImageHolder from "./imageHolder";
import Title from "./title";
import Button from "./button";
import Social from "./social";
import Resume from "./resume";

const Intro = () => (
    <section className="intro">
        <div className="intro-content-container">  
            <div className="intro-img-container"> 
                <ImageHolder />
            </div>
            <Title title='Hi, i am Obeke Calistus' subTitle='Front-End Developer' />
            <p className="intro-info">I'm a developer with experience in building visually appealling interfaces  
                <br className="disappearOnMobile" /> &nbsp;
                using suitable web technologies and following best practices.
            </p>
            <div>
                <Button href="mailto:howell2028@gmail.com?subject=Mail from Site">
                    Hire Me
                </Button> <span style={{marginRight: '1.2rem'}}></span>
                <Resume>My Resume</Resume>
            </div>
            <div className="social-intro">
                <Social />
            </div>
        </div>
    </section> 
)

export default Intro;