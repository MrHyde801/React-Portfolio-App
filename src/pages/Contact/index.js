import React from "react"
import SocialMediaLinks from "../../components/SocialMediaLinks"
import ContactInfo from "../../components/ContactInfo"

const Contact = () => {
    return (
        <div className="container-fluid d-flex flex-column align-items-center">    
            <div className="row">
                <ContactInfo />
            </div>
            <div className="row">
                <SocialMediaLinks />
            </div>
        </div>
    )
}

export default Contact