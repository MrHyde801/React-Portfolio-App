import React from 'react';
import logo from '../image/IanPortrait.jpg'

const Header = () => {
  return (
    <div className="d-flex justiy-content-between align-items-center pt-3">
        <div className="col-10 ">
            <h1 className="name">Ian Hyde</h1>
            <h3 className="ps-4  jobTitle"> Web Developer/Drafting Technician</h3>
        </div>
        <div className="col-2">
          <img src={logo} />
        </div>
    </div>
  );
};

export default Header;