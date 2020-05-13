import React from 'react';
import PropTypes from 'prop-types';

const WorkList = ({workDetails}) => (
    workDetails.map(workDetail => <div key={workDetail.id} className="work-container">
        <div className="work-img">
            <img src={workDetail.pics} alt={workDetail.title} />
        </div>
        <div className="work-content">
            <p className="work-headings">WEBSITE</p>
            <h3 className="work-headings" style={{marginTop: '-1rem'}}>
                <a href={workDetail.link} 
                    className="work-link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    {workDetail.title}
                </a>
            </h3>
            <p className="work-headings">Tools: <span>{workDetail.tools.join(', ')}</span></p>
            {/* <p className="work-info">
                {workDetail.info}
            </p> */}
        </div>
        <hr className="work-hr" />
    </div>)
)

WorkList.propTypes = {
    workDetails: PropTypes.array.isRequired
}

export default WorkList;