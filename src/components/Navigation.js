import React, { useContext } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { authContext, LightContext } from '../App';


const Navigation = () => {
  const auth = useContext(authContext)
  const light = useContext(LightContext)
  return (
    <nav className="Nav mx-3">
      <div className='container-fluid d-inline-flex justify-content-between w-100 p-2 links' >
                <Link to="/">About Me</Link>
                <Link to="/resume">Resume</Link>
                <button className="btn-dark m-3" onClick={() => light.setLightMode(!light.lightMode)}>{`Activate ${light.lightMode ? "Dark" : "Light"} Mode`}</button>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Info</Link>
      </div>
    </nav>
  )
  ;
};

export default Navigation;
