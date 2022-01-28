import { createContext, useState, useEffect } from 'react';
import Home from './pages/MainPage';
import Resume from './pages/Resume'
import Bio from './pages/Bio'
import Contact from './pages/Contact'
import ProjectPage from './pages/Projects'
import { Route, Routes, Navigate } from 'react-router-dom'//Makes it so we can have the multiple pages on a 1 page document. 
import Header from './components/Header'
import Navigation from "./components/Navigation"


export const LightContext = createContext()
export const authContext = createContext();

function Privates({user, Component}) {
    console.log(user)
    if(user) {
      return (
        <Component />
      )
    } else {
      return (
      <Navigate
        to={"/"}
      />
      )
    }
}

function App() {

  const [lightMode, setLightMode] = useState(true)
  const [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    if(user) {
      localStorage.setItem('user', user)
    } else {
      localStorage.removeItem('user')
    }
  },[user])

  const signIn = (email) => {
      setUser(email);
  };

  const signOut = () => {
      setUser(null);
  };


  return (
    <div className="App">
      <LightContext.Provider value={{lightMode, setLightMode}}>
        <authContext.Provider value={{
          user,
          signIn,
          signOut
        }}>
            <Header />
            <Navigation />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/bio" element={<Bio/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/projects"
                element={<Privates user={user} Component={ProjectPage} />}
              />
              <Route path="/contact"
                element={<Privates user={user} Component={Contact} />}
              />
            </Routes>
          </authContext.Provider>
      </LightContext.Provider>
   
    </div>
  );
}

export default App;



