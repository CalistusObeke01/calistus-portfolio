import React from "react";
import PropTypes from 'prop-types';

const Link = ({ href, content }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{color: '#1AB36B'}}>{content}</a>
)

Link.propTypes = {
    href: PropTypes.any,
    content: PropTypes.any
}

export default Link;