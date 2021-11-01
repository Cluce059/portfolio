import React from 'react';
import { FaUser, FaFileAlt, FaProjectDiagram, FaMobileAlt  } from 'react-icons/fa';


function Nav(props){

    const { contactSelected, setContactSelected } = props;

    <Nav>contactSelected={contactSelected} setContactSelected={setContactSelected}</Nav>
    return (
        <>
        <header className="flex-row px-1">
            <h2 className="mx-2" data-testid="link" href="/">
                   Caroline Luce
                </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}> <FaUser /> Bio</a> 
                    </li>
                    <li className="mx-2">
                        <a href='#contact' onClick={() => setContactSelected(true)}> <FaMobileAlt /> Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href='#portfolio'onClick={() => setContactSelected(false)}> <FaProjectDiagram /> Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href='#resume' onClick={() => setContactSelected(false)}> <FaFileAlt /> Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
        <section className="hero"></section>
        </>
    );
}

export default Nav;
