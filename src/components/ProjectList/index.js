import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {FaGithub} from 'react-icons/fa';
import {MdExitToApp} from 'react-icons/md';

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
name: 'This app and more to come ...',
description: 'alt',
i: '0',
alt: 'app',
repo: '/',
link: '/'
} 
    ];

   return (
     <div className="carousel-wrapper">
     
         <div className="project-container">
         <Carousel>
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
                      <figcaption className="captions"><a className="project-icon" href={project.repo}> <FaGithub /> </a>
                      <a className="project-icon"href = {project.link}><MdExitToApp /> </a></figcaption>
                  </figure>
                  
          ))}
           </Carousel>
        </div>

     </div>
    );
};


export default ProjectList;

/** {
 * {projects.map((project)=> (
              <li className="project">
                  {project.name}
                  <img 
                  src={require(`../../assets/img/${project.i}.png`).default}
                  alt={project.alt}
                  key={project.name}
                  ></img>
                      <span> {project.description} </span>
                      <a href ={project.link}>Vist</a>
                      <a href={project.repo}>Github Repo</a>
              </li>
          ))}
 * 
 * 
            name: 'Fitness Buddy',
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
            name: 'This app and more to come ...',
            description: 'alt',
            i: '0',
            alt: 'app',
            repo: '/',
            link: '/'
        } */