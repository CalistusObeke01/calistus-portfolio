import React from 'react';
import PropTypes from "prop-types";
import "./layout.css";

const Button = ({ children, btnStyling, href, download}) => (
    <a className={btnStyling} href={href} rel="noopener noreferrer" download={download}>
        {children}
    </a>
)

Button.propTypes = {
    children: PropTypes.node.isRequired
}

Button.defaultProps = {
    btnStyling: "btnStyling"
}

export default Button;