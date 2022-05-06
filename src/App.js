import { createContext, useState, useEffect } from 'react';
import Home from './pages/Login';
import Resume from './pages/Resume'
import Bio from './pages/Bio'
import Contact from './pages/Contact'
import ProjectPage from './pages/Projects'
import { Route, Routes, Navigate } from 'react-router-dom'//Makes it so we can have the multiple pages on a 1 page document. 
import Header from './components/Header'
import Navigation from "./components/Navigation"
import Projects from './components/Projects';


export const LightContext = createContext()
export const authContext = createContext();


function App() {

  const [lightMode, setLightMode] = useState(localStorage.getItem('light'));
  const [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    if(user) {
      localStorage.setItem('user', user)
    } else {
      localStorage.removeItem('user')
    }
  },[user])

  useEffect(()=> {
    if(lightMode) {
      localStorage.setItem('light', lightMode)

    } else {
      localStorage.removeItem('light')
    }
  },[lightMode])

  const signIn = (email) => {
      setUser(email);
  };

  const signOut = () => {
      setUser(null);
  };


  return (
    <div className={lightMode ? "App light" : "App dark"}>
      <LightContext.Provider value={{lightMode, setLightMode}}>
        <authContext.Provider value={{
          user,
          signIn,
          signOut
        }}>
            <Header />
            <Navigation />
            <Routes>
              <Route exact path="/" element={<Bio/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/projects"
                element={<Projects/>}
              />
              <Route path="/contact"
                element={<Contact />}
              />
            </Routes>
          </authContext.Provider>
      </LightContext.Provider>
   
    </div>
  );
}

export default App;



