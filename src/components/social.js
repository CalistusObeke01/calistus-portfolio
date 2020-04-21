import React from 'react';
import Link from './link';
import { FaGithub, FaTwitter,FaLinkedinIn } from "react-icons/fa";


const socialLinks = [
    {id: 1, link: 'https://www.github.com/CalistusObeke01', icon: <FaGithub /> },
    {id: 2, link: 'https://www.linkedin.com/in/Calistus-pius', icon: <FaLinkedinIn /> },
    {id: 3, link: 'https://www.twitter.com/howell2028', icon: <FaTwitter /> }
];
    
const Social = () => (
    <div className="social">
        {socialLinks.map(socialLink => (
            <div key={socialLink.id} className="link-container"> 
                <Link href={socialLink.link} content={socialLink.icon} />
            </div>
        ))}
    </div>
)

export default Social;