import React from 'react'
import "./about.css"
import aboutImg from "./img/about.jpg"
function About() {
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    });
    return (
        <div className='about component__space' id='About'>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="" className='aboutImg' />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">
                            About Me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">Hello! My name is Mohd Huzaif and I am pursuing 3rd year B.Tech. in the department of Computer Science and Engg., in Noida Institute of Engineering and Technology (NIET).,</p>
                            <p className="about__text p__color">I want to be a Full Stack Developer. I love problem-solving. I am good at Java, Python,Java Script,Data Structure and Algorith. I love coding. Additionally, I have interest in Machine learning and Artificial inteligence</p>
                            <p className="about__text p__color">I enjoy creating things that live on the internet. In 2nd year I decided to create web sites that are responsive.<br />
                                I am a passionate developer but more importantly I'm passionate about technology.</p>
                            <p className="about__text p__color"> I love to learn new things and always ready to face any challenge.</p>
                            <div className="about__button d__flex align__items__center">
                                <a href="#"><button className="about btn pointer">Download CV</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="about__heading" style={
                    { "font-size": "40px" }
                }>
                    Education
                </h2>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-1.5  "></div>
                        <time className="mb-1 text-md font-normal leading-none text-red-800 dark:text-gray-500">
                            2022-2024
                        </time>
                        <h3 className="text-lg font-semibold text-white-600 dark:text-white">
                            B.Tech
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Currently ,I am Pursuing B.tech form
                            <strong>
                                Noida Institute of Engineering and Technology ,Greater Noida.{" "}
                            </strong>
                            with Computer Science &amp; Engineering
                            <br />
                            <br />
                            • 1st year: 9.22 YGPA
                            <br />
                            <br />• 2nd year: 9.17 YGPA
                            <br />
                        </p>

                    </li>
                    <li className="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-1.5  "></div>
                        <time className="mb-1 text-md font-normal leading-none text-red-800 dark:text-gray-500">
                            2018 - 2020
                        </time>
                        <h3 className="text-lg font-semibold text-white-600 dark:text-white">
                            Intermediate
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            I complete my Intermdiate from the
                            <strong>Rukmani Devi Jaipuria Public School,New Delhi</strong>
                            <br />
                            <br />•Scoring 76% with (PCM)
                        </p>


                    </li>
                    <li className="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-1.5  "></div>
                        <time className="mb-1 text-md font-normal leading-none text-red-800 dark:text-gray-500">
                            2017 - 2018
                        </time>
                        <h3 className="text-lg font-semibold text-white-600 dark:text-white">
                            High School
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            I complete my High Schooling from the
                            <strong>Rukmani Devi Jaipuria Public School,New Delhi</strong>
                            <br />
                            <br />•Scoring 70% 
                        </p>


                    </li>

                </ol>

            </div>

            <div className="up__to__top__btn">
                <a href="#" className='bottom__to__top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </a>
            </div>

        </div>
    )
}

export default About
