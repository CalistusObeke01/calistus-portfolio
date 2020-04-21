import React from 'react';
import PropTypes from "prop-types";

const Title = ({ title, subTitle }) => (
    <>
        <h1 style={{marginBottom: '0', color: '#ffffff'}}>{title}</h1>
        <h2 style={{lineHeight: '42px', color: '#1ab36b'}}>{subTitle}</h2>
    </>
)

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default Title;