import React from 'react';
import resume from '../../assets/files/Luce_Resume.A.pdf';

function Resume(){
    return (
        <section className="resume-section" id="resume">
        <h2 className="my-2">Resume</h2>
        <ul>
            <h2>Proficiencies</h2>
            <li>Javascript and also JSX with React</li>
            <li>Back-End Web Development</li>
            <li>Database Management</li>
            <a href={resume}>Download Resume PDF</a>
        </ul>
        </section>
    )
}

export default Resume;