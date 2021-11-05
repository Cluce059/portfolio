import React from 'react';
import resume from '../../assets/files/Luce-resume.C.pdf';

function Resume(){
    return (
        <section className="resume-section" id="resume">
        <h1 className="flex-row">Resume</h1>
        <h2 className="flex-row">Proficiencies</h2>
        <ul>
            <li>JavaScript</li>
            <li>MERN stack development</li>
            <li>Back-End Web Development</li>
            <li>NoSQl and SQL Database Management</li>
            <a href={resume}>Download Resume PDF</a>
        </ul>
        </section>
    )
}

export default Resume;