import React from 'react';
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const SocialMediaLinks = () => {
    return (
        <div className='container-fluid d-flex flex-column align-items-center'>
            <div className='row sectionHead'>
                <h2>Social Links</h2>
                <div className='row underline'></div>
            </div>
            <div className="row social-media">
                <a href="https://www.linkedin.com/in/MrHyde801/" target="_blank"><FaLinkedin />LINKEDIN</a>
                <a href="https://www.instagram.com/MrHyde801/" target="_blank"><FaInstagram />INSTAGRAM</a>
                <a href="https://www.facebook.com/MrHyde801/" target="_blank"><FaFacebookSquare />FACEBOOK</a>
                <a href="https://github.com/MrHyde801" target="_blank"><FaGithubSquare />GIT HUB</a>
            </div>
        </div>
    )
};

export default SocialMediaLinks;
