import React from 'react';
import { FaUser, FaFileAlt, FaProjectDiagram, FaMobileAlt  } from 'react-icons/fa';


function Nav(props){

    const { contactSelected, setContactSelected } = props;

    <Nav>contactSelected={contactSelected} setContactSelected={setContactSelected}</Nav>
    return (
        <>
            <nav>
                <div className="navbar-container">
                <ul>
                    <li >
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}> <FaUser /> Bio</a> 
                    </li>
                    <li >
                        <a href='#contact' onClick={() => setContactSelected(true)}> <FaMobileAlt /> Contact</a>
                    </li>
                    <li >
                        <a href='#portfolio'onClick={() => setContactSelected(false)}> <FaProjectDiagram /> Portfolio</a>
                    </li>
                    <li >
                        <a href='#resume' onClick={() => setContactSelected(false)}> <FaFileAlt /> Resume</a>
                    </li>
                </ul>
                </div>
            </nav>
       
        </>
    );
}

export default Nav;
