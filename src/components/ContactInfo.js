import React, {useState } from 'react';

const ContactInfo = () => {
  const [contact] = useState([
    {
        types: 'Phone',
        detail: ['1-801-822-4456']
    },
    {
        types: 'Email',
        detail: ['IanHyde801@gmail.com']
    }
    ])
    
      return (
        <div>
              <div className='row sectionHead'>
                <h2>Contact Info</h2>
              </div>
          {contact.map(data => {
            return (
            <div className="borderPatrol">
              <div className='row types mx-2'>
                {data.types}
              </div>
              <div className="row detail mx-3">
                {data.detail}
              </div>
            </div>
            )
          })}
        </div>
      );
};

export default ContactInfo;