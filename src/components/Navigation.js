import React, { useContext } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { authContext } from '../App';


const Navigation = () => {
  const auth = useContext(authContext)
  return (
    <nav className="Nav mx-3">
      <div className='container-fluid d-inline-flex justify-content-between w-100 p-2 links' >
                <Link to="/">Login/Logout</Link>
                <Link to="/bio">About Me</Link>
                <Link to="/resume">Resume</Link>
                {auth.user && <Link to="/projects">Projects</Link>}
                {auth.user && <Link to="/contact">Contact Info</Link>}
      </div>
    </nav>
  )
  ;
};

export default Navigation;
