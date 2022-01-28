import React, {useState} from "react";
import Penny from "../image/Penny.jpg"
import Family from "../image/Family.jpg"
import Amanda from "../image/Amanda.jpg"
import Camping from "../image/camping.jpg"
import Zions from "../image/Zions.jpg"
import Coaching from "../image/coaching.jpg"
import Lacrosse from "../video/Lacrosse.mp4"

const AboutMe = () => {
    const [bio, useBio] = useState([
        {
            description: [
                'I was born an raised in Orem Utah. Growing up my parents threw me into every sport you can think of. I love competing and the sport I stuck with through high school and college is Lacrosse. Family is the most important thing to me. I have very close relationship to family. Last year I got married to my best friend and we adopted a beautiful lab/dobermen mix. I am currently a student at Utah Valley University studying computer science',
                'My hobbies are camping, hiking, playing video games, coding, and playing/coaching lacrosse. Once I am finished with school I intend to coach High School Lacrosse again. I currently Play lacrosse at Utah Valley University',
                'What Got me into coding was during my first few semesters of college I could not pick a degree. Originally I left highschool wanting to be an architect, but I quickly changed my mind. I eventually narrowed it down to a couple fields of work. Physical training, Sports Medicine, and Computer Science. It was not until my friend convinced me to try it out that I decided to pursue a career in computer science, more specifically web development'
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
