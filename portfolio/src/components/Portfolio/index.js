import React from 'react';
import ProjectList from '../ProjectList';


function Portfolio(){
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="flex-row">
            <h2>My Portoflio</h2>
            </div>
            <ProjectList/>
        </section>
    );
}

export default Portfolio;

