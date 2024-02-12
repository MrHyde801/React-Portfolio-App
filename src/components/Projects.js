import React, { useState } from 'react';

const Projects = () => {
    const [projects] = useState([
        {
            title: 'Trivia Game',
            description: 'Uing only JavaScript, Me and 1 other student created a trivia game, pulling the trivia questions and answers from an API. You can select Categorie and based on difficulty it populates different questions.',
            link: "https://mrhyde801.github.io/TriviaAppProject-IanandIsaac/"
        },
        {
            title: 'Golf Scorecard',
            description: 'Using Javascript, we pulled course information from an API with Heroku. and built a usable scorecard with yardages, and handicap. (Mtech pulled Heroku sub, API unusable at this moment. Aiming to be updated by end of month 2/12/24) ',
            link: "https://mrhyde801.github.io/GolfScoreCard/"
        },
        {
            title: 'To-do',
            description: 'Our first Js lab back in fall 2021, I built a simple To Do List. Shows simple concepts but a fun reminder of where I started',
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
