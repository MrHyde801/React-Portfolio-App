import React, {useState} from 'react';

const Education = () => {
    const [edu, setEdu] = useState([
    {
        school: 'Utah Valley University',
        certificate: 'Currently in sophmore year studying Computer Science'
    },
    {
        school: 'Orem High School',
        certificate: 'Diploma - May 2013'
    },
    {
        school: 'Mountainland Technical College',
        certificate: 'Web Development Certificate - May 2022'
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
              <div className='row school'>
                {data.school}
              </div>
              <div className="row cert">
                {data.certificate}
              </div>
            </>
            )
          })}
        </div>
      );
    };

export default Education;
