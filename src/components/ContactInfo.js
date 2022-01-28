import React, {useState } from 'react';

const ContactInfo = () => {
  const [contact, setContact] = useState([
    {
        type: 'Address',
        details: [
          '351 N Main St',
          'Orem, Ut 84057'
        ]
    },
    {
        type: 'Phone',
        details: ['1-801-822-4456']
    },
    {
        type: 'Email',
        details: ['IanHyde801@gmail.com']
    }
    ])
    
      return (
        <div className='container-fluid'>
              <div className='row sectionHead'>
                <h2>Contact Info</h2>
                <div className='row underline'></div>
              </div>
          {contact.map(data => {
            return (
            <>
              <div className='row type'>
                {data.type}
              </div>
              <div className="row details">
                {data.details}
              </div>
            </>
            )
          })}
        </div>
      );
};

export default ContactInfo;