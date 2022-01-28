import React, {useState, useContext} from "react"
import { authContext, LightContext } from "../../App"


const Main = () => {
    const auth = useContext(authContext)
    const light = useContext(LightContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function handleClick() {
        if(email && password) {
            auth.signIn(email)
        } else {
            alert('Please Enter Email and Password')
        }
    }
        
    if(!auth.user) {
        return (
          <div className="container d-flex flex-column p-4">
              <div className="input-group m-3">
                  <span className="input-group-text">Email</span>
                  <input type="text" aria-label="email" className="form-control" placeholder="Enter Email@gmail.com" onChange={e => setEmail(e.target.value)} value={email} />
              </div>
              <div className='input-group m-3'>
                  <span className="input-group-text">Password</span>
                  <input type="password" aria-label="password" className="form-control" placeholder="Enter Secret Code here" onChange={e => setPassword(e.target.value)} value={password} />
              </div>
              <button className="btn-primary w-100 m-3" onClick={handleClick} >Sign Up</button>
              <button className="btn-dark w-100 m-3" onClick={() => light.setLightMode(!light.lightMode)}>{`Activate ${light.lightMode ? "Dark" : "Light"} Mode`}</button>
          </div>
        )
    } else {
        return (
            <div className="container d-flex flex-column w-25 ">
                <button className="btn-primary m-3" onClick={auth.signOut} >
                    signOut
                </button>
                <button className="btn-dark m-3"  onClick={() => light.setLightMode(!light.lightMode)}>{`Activate ${light.lightMode ? "Dark" : "Light"} Mode`}</button>
            </div>
            

        )
    }
}

export default Main