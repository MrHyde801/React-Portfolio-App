import React, { useContext } from "react"
import Experience from "../../components/Experience"
import Education from "../../components/Education"
import Skills from "../../components/Skills"
import {LightContext} from '../../App'


const Resume = () => {

    return (
        <div className="container-fluid d-flex">
            <div className="col-3">
            <Education />
            <Skills />
            </div>
            <div className="col-8">
            <Experience />
            </div>
        </div>
    )
}

export default Resume

