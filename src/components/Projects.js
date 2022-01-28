import React, { useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Interpersonal',
            description: 'Independent and team oriented, Helpful team member, Outgoing and effective communicator, Project oriented, Knowledge seeker, Constructive trainer, Excellent customer service',
            link: "https://mrhyde801.github.io/TriviaAppProject-IanandIsaac/"
        },
        {
            type: 'Front-end Development',
            description: 'HTML, CSS, Javascript, Bootstrap',
            link: "https://mrhyde801.github.io/GolfScoreCard/"
        },
        {
            type: 'Back-End Development',
            description: 'Node',
            link: "https://mrhyde801.github.io/toDoList/"
        },
        {
            type: 'Computive',
            description: 'AutoCad, Excell/GoogleSheets, Photoshop',
            link: "https://mrhyde801.github.io/CarouselBootsrap/"
        }
        ])
        
        return (
          <div className='container-fluid'>
                <div className='row sectionHead'>
                  <h2>Projects</h2>
                  <div className='row underline'></div>
                </div>
            {projects.map(data => {
              return (
              <>
                <div className='row title'>
                  {data.title}
                </div>
                <div className="row description">
                  {data.description}
                </div>
                <div className="row link">
                <iframe src={data.link}
          width="100%" height="500" allowfullscreen sandbox />
                </div>
              </>
              )
            })}
          </div>
        );
};

export default Projects;
