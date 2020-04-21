import React from 'react';

import WorkList from './workList';
import SectionTitle from './sectionTitle';
import CarelineImg from  '../images/careline.png';
import BookitImg from  '../images/bookit.png';
import DoronybeautyImg from  '../images/doronybeauty.png';

const workDetails = [
    {
        id: 1,
        pics: CarelineImg,
        title: 'Careline Nigeria',
        tools: ['HTML5', 'CSS3', 'Bootstrap', 'Typescript', 'Angular'],
        link: 'http://www.carelinenigeria.com',
        info: `Caline/skinlab brands are top notch cosmestics products 
        dermatologically tested and designed to cater for all skin types.`
    },
    {
        id: 2,
        pics: BookitImg,
        title: 'Book!T',
        tools: ['HTML5', 'CSS3', 'Bootstrap', 'React'],
        link: 'https://b00kit.herokuapp.com',
        info: `BOOK!T is the best way to manage your organization's
        meeting rooms, conference rooms and
        other shared spaces without hiccups...`
    },
    {
        id: 3,
        pics: DoronybeautyImg,
        title: 'Dorony Beauty & Skincare',
        tools: ['HTML5', 'CSS3', 'Bootstrap', 'React'],
        link: 'https://doronybeauty.herokuapp.com',
        info: `Dorony beauty & skincare gats your back for your organic skincare, 
        makeup, facial treatments, pedicure treatments, manicure treatments, 
        makeup products and cosmetics.`
    }
];

const Work = () => {
    return (
        <section id="work">
            <SectionTitle title="What i have built" />
            <p className="work-subTitle">Some of the projects i have worked on</p>
            {
                <WorkList workDetails={workDetails} />
            }
        </section>
    )
}

export default Work;