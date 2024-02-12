import React, {useState} from 'react';

const Education = () => {
    const [edu] = useState([
    {
        school: 'Mountainland Technical College',
        certificate: 'Web Development Certificate - May 2022'
    },
    {
      school: 'Utah Valley University',
      certificate: 'Pursuing Bachelors Degree of Computer Science'
    },
    {
        school: 'Orem High School',
        certificate: 'Diploma - May 2013'
    }
    ])
    
      return (
        <div className='container-fluid'>
              <div className='row sectionHead'>
                <h2>Education</h2>
                <div className='row underline'></div>
              </div>
          {edu.map(data => {
            return (
            <>
              <div className='row school px-4'>
                {data.school}
              </div>
              <div className="row cert px-5 my-2">
                {data.certificate}
              </div>
            </>
            )
          })}
        </div>
      );
    };

export default Education;
