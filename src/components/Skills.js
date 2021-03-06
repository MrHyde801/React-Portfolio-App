import React, {useState} from 'react';

const Skills = () => {
  const [skills] = useState([
    {
        type: 'Interpersonal',
        details: 'Independent and team oriented, Helpful team member, Outgoing and effective communicator, Project oriented, Knowledge seeker, Constructive trainer, Excellent customer service'
    },
    {
        type: 'Front-end Development',
        details: 'HTML, CSS, SCSS, Javascript, Bootstrap, Angular, Angular Material, React'
    },
    {
        type: 'Back-End Development',
        details: 'Node, Firebase, PostgresSQL, MongoDB '
    },
    {
        type: 'Computive',
        details: 'AutoCad, Excell/GoogleSheets, Photoshop'
    }
    ])
    
    return (
      <div className='container-fluid'>
            <div className='row sectionHead'>
              <h2>Skills</h2>
              <div className='row underline'></div>
            </div>
        {skills.map(data => {
          return (
          <>
            <div className='row type px-4'>
              {data.type}
            </div>
            <div className="row details px-5 my-2">
              {data.details}
            </div>
          </>
          )
        })}
      </div>
    );
};

export default Skills;
