import React from 'react';
import PropTypes from 'prop-types';

const Resume = ({href, children, resumeStyle}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={resumeStyle}>
        {children}
    </a>
)

Resume.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired
}

Resume.defaultProps = {
    resumeStyle: "resumeStyle",
    href: "https://drive.google.com/file/d/1Qv4YP3JDYqHEA-a-qOCbY1gxyiCm6g1v/view?usp=drivesdk"
}

export default Resume;