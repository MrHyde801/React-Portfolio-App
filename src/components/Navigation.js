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
    <nav className="Nav">
      <div className='container-fluid d-inline-flex justify-content-between w-100 p-1 links' >
                <Link to="/">Home and Login</Link>
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
