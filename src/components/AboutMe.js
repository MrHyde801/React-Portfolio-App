import React, {useState} from "react";
import Penny from "../image/Penny.jpg"
import Family from "../image/Family.jpg"
import Amanda from "../image/Amanda.jpg"
import Camping from "../image/camping.jpg"
import Zions from "../image/Zions.jpg"
import Coaching from "../image/coaching.jpg"

const AboutMe = () => {
    const [bio] = useState([
        {
            description: [
                'I was born in 1995, and raised in Orem, Utah. Growing up, my parents threw me into any and every sport you can think of. Sports gave me a passion for competition and excellence. I was honored to have inspiring coaches along the way teach me about life and success. I was lucky enough to be able to play college lacrosse at Utah Valley University for 4 years. I loved my time at UVU so much that in 2023 I returned and was hired as an assistant coach.',
                'Family is the most important thing to me. Growing up I was able to be surrounded by loving parents and 2 siblings who annoyed the hell out of me until we grew up and realized we had a lot in common. My Parents divorced in 2006. They both worked tremendously hard to provide for me, my brother, and sister to make sure we had all we needed. Seeing their dedication taught me the importance of sacrifice, grit, and family',
                'During my first few semesters of college I struggled to find a career path. Originally I left high school wanting to be an architect, and landed in an adjacent design field. I started my career as an AutoCAD designer for Vivint Solar in 2015. Realizing I did not want to have a long term career in solar, I decided to change my field. I had many talks with those who knew me best. I give credit to my best friend Dallen who introduced me to the field of Web Dev. I found it to be exactly what I was looking for in a career.',
                'I took a break in 2018 from school to serve a 2 year service mission for my former church. After returning I landed a job with Sunrun Solar to put me through school as I continued my CS Degree at UVU. I earned a certificate at Mountainland Technical College for Web Development Spring of 2022. During that summer I volunteered to take a year off pursuing web dev to support my wife as she made a career change to PR and Communications. I resumed my pursuit fall of 2023 and started another WebDev program with Bloomtech. I will be finishing the program fall of 2024'
            ],
        }
    ])
    
    return (
        <div className='container d-flex flex-column align-items-center'>
            <div className="row sectionHead d-flex justify-content-center">
                <div className="d-flex justify-content-center mt-3">
                    <h2>About Me</h2>
                </div>
                <div className="underline"></div>
            </div>
        {bio.map(data => {
            return (
                <>
                    <div className="row">
                        {data.description.map(item => {
                            return (
                                <p>{item}</p>
                            )
                        })}
                    </div>
                    <div className="row">
                    <div id="carouselExampleControls" className="carousel slide d-flex" data-ride="carousel">
                        <div className="carousel-inner d-flex align-items-center">
                            <div className="carousel-item imgCarousel active">
                            <img className="d-block w-100" src={Amanda} alt="First slide" />
                            </div>
                            <div className="carousel-item imgCarousel">
                            <img className="d-block w-100" src={Family} alt="Second slide" />
                            </div>
                            <div className="carousel-item imgCarousel">
                            <img className="d-block w-100" src={Penny} alt="Third slide" />
                            </div>
                            <div className="carousel-item imgCarousel">
                            <img className="d-block w-100" src={Camping} alt="Fourth slide" />
                            </div>
                            <div className="carousel-item imgCarousel">
                            <img className="d-block w-100" src={Zions} alt="Fifth slide" />
                            </div>
                            <div className="carousel-item imgCarousel">
                            <img className="d-block w-100" src={Coaching} alt="Sixth slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="sr-only">Next</span>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                        </div>
                    </div>
                </>
            )
        })}
        </div>
    )
        

}

export default AboutMe;
