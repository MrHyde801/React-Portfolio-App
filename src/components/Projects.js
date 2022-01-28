import React, { useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Trivia Game',
            description: 'First major group project, using only JavaScript created a trivia game, pulling the trivia questions and answers from an API',
            link: "https://mrhyde801.github.io/TriviaAppProject-IanandIsaac/"
        },
        {
            title: 'Golf Scorecard',
            description: 'Using Javascript, we pulled course information from an API and built a usable scorecard.',
            link: "https://mrhyde801.github.io/GolfScoreCard/"
        },
        {
            title: 'To-do',
            description: 'Our first Js lab,  we built a simple To Do List',
            link: "https://mrhyde801.github.io/toDoList/"
        },
        ])
        
        return (
          <div className='container d-flex flex-column justify-content-center'>
                <div className='row sectionHead d-flex justify-content-center'>
                  <div className='d-flex justify-content-center'><h2>Projects</h2></div>
                  <div className='row underline'></div>
                </div >
            {projects.map(data => {
              return (
              <>
                <div className='row title d-flex justify-content-center' >
                  {data.title} : {data.description}
                </div>
                <div className="row link">
                <iframe src={data.link}
          width="100%" height="500" allowFullScreen sandbox />
                </div>
              </>
              )
            })}
          </div>
        );
};

export default Projects;
