import React from 'react';
import resume from '../../assets/files/Luce_Resume.A.pdf';

function Resume(){
    return (
        <section className="resume-section" id="resume">
        <h1 className="flex-row">Resume</h1>
        <h2 className="flex-row">Proficiencies</h2>
        <ul>
            <li>Javascript and also JSX with React</li>
            <li>Back-End Web Development</li>
            <li>Database Management</li>
            <a href={resume}>Download Resume PDF</a>
        </ul>
        </section>
    )
}

export default Resume;