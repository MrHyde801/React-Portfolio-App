import React from 'react';
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const SocialMediaLinks = () => {
    return (
        <div className='container d-flex flex-column align-items-center w-100'>
            <div className='row sectionHead'>
                <div className="d-flex justify-content-center mt-4">
                <h2>Social Media</h2>
                </div>
            </div>
            <div className="row w-100 social-media">
                <a className='col-6 d-flex justify-content-center align-items-center' href="https://www.linkedin.com/in/MrHyde801/" target="_blank"><FaLinkedin />LINKEDIN</a>
                <a className='col-6 d-flex justify-content-center align-items-center' href="https://www.instagram.com/MrHyde801/" target="_blank"><FaInstagram />INSTAGRAM</a>
                <a className='col-6 d-flex justify-content-center align-items-center' href="https://www.facebook.com/MrHyde801/" target="_blank"><FaFacebookSquare />FACEBOOK</a>
                <a className='col-6 d-flex justify-content-center align-items-center' href="https://github.com/MrHyde801" target="_blank"><FaGithubSquare />GIT HUB</a>
            </div>
        </div>
    )
};

export default SocialMediaLinks;
