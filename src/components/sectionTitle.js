import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({title}) => (
    <div className="section-title">
        <h2>{title}</h2>
    </div>
)

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionTitle;