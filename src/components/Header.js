import React from 'react';
import profile from '../image/IanPortrait.jpg'

const Header = () => {
  return (
    <div className="d-flex justiy-content-between align-items-center py-4">
        <div className="col-10 ">
            <h1 className="name ms-3">Ian Hyde</h1>
            <h3 className="ps-5  jobTitle"> Drafting Technician, Studying Web Development</h3>
        </div>
        <div className="col-2">
          <img className="profile" src={profile} />
        </div>
    </div>
  );
};

export default Header;