import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
//perhaps dub this carousel lib and go for a css styled gallery that slides
import {FaGithub} from 'react-icons/fa';
import {MdExitToApp} from 'react-icons/md';

import Boop from "../Boop";

const ProjectList =() => {
    //leave open bc use will initialize 
    //const [currentProject, setCurrentProject] = useState();
    const projects=[
{  name: 'Fitness Buddy',
description: 'Fitness Application',
i: 0,
alt: 'Fitness Buddy app',
repo: 'https://github.com/Cluce059/Fitness-Buddy',
link: 'https://fitness-buddy-2.herokuapp.com/'
},
{
name: 'Portfolio-v1',
description: 'my first portfolio',
i: 1,
alt: 'My first portfolio app',
repo: 'https://github.com/Cluce059/Portofolio',
link: 'https://cluce059.github.io/Portofolio/'
},
{
name: 'Trivia Brews',
description: 'Trivia and beer game app',
i: 2,
alt: 'Trivia brews app',
repo: 'https://github.com/Cluce059/TriviaBrews',
link: 'https://cluce059.github.io/Project1/'
},
{
name: 'Food Festival',
description: 'Food festival app for finding tickets and events (placeholder)',
i: 3,
alt: 'Food Festival app',
repo: 'https://github.com/Cluce059/food-festival',
link: 'https://cluce059.github.io/food-festival/'
},
{
name: 'Weather App',
description: 'Application for tracking local weather location api',
i: '4',
alt: 'weather tracking app',
repo: 'https://github.com/Cluce059/weatherApp',
link: 'https://cluce059.github.io/weatherApp/'
},
{
    name: 'News Distillery',
    description: '',
    i: '6',
    alt: 'News',
    repo: 'https://github.com/Cluce059/fitness-buddy-v2',
    link: 'https://news-distillery.herokuapp.com/'
    },
      
{
name: 'Portfolio v2',
description: 'My second portfolio',
i: '5',
alt: 'app',
repo: 'https://github.com/Cluce059/portfolio',
link: '/'
} 
    ];

   return (
       <div className="projects">
     <div className="carousel-wrapper">
     
         <div className="project-container">
         <Carousel infiniteLoop useKeyboardArrows >
         {projects.map((project)=> (   
                  <figure>
                      <img
                  src={require(`../../assets/img/${project.i}.png`).default}
                  alt={project.alt}
                  key={project.name}
                  ></img>
                  <figcaption>
                      {project.name} : <span>{project.description}</span>
                      </figcaption>
                      <figcaption className="captions">
                   
                                <Boop rotation={20} timing={200}> 
                                    <a className="project-icon" href = {project.link}>
                                    <MdExitToApp /> </a> 
                                </Boop>
                                <Boop rotation={20} timing={200}>
                                <a className="project-icon" href={project.repo}> <FaGithub /> </a>                                         
                                </Boop>
                      </figcaption>
                  </figure>
          ))}
           </Carousel>
        </div>

     </div>
     </div>
    );
};


export default ProjectList;
