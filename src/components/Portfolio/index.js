import React from 'react';
import ProjectList from '../ProjectList';


function Portfolio(props){
    //const { currentProject } = props;
    return (
        <section className="portfolio-section" id="portfolio">
            <h2>My Portoflio</h2>
            <ProjectList/>
        </section>
    );
}

export default Portfolio;

