import React from "react";
import resume from '../../assets/files/Luce-resume.C.pdf';
//import { FaFileAlt, FaGitAlt, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

function Footer(){
    const links ={
        linkedIn: 'https://www.linkedin.com/in/caroline-luce-a314b1224/',
        github: 'https://github.com/Cluce059',
        stackOverflow: 'https://stackoverflow.com/users/17255139/caroline',
        resume: resume
    }
    return (
        <footer>
            <ul >
                <li>
                    <a href={links.github} > <FaIcons.FaGitAlt /> Github</a>
                </li>
                <li >
                    <a href={links.linkedIn}> <FaIcons.FaLinkedin /> LinkedIn</a>
                </li>
                <li>
                    <a href={links.stackOverflow} > <FaIcons.FaStackOverflow /> StackOverflow</a>
                </li>
                <li>
                    <a href={links.resume}  > <FaIcons.FaFileAlt /> Download Resume pdf</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;