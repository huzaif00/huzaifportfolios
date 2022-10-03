import React from 'react'
import "./project.css"
import Project1 from "./img/p1.jpg"
import Project2 from "./img/p2.jpg"
import Project4 from "./img/p4.jpg"



function Project() {
  return (
    <div className='project component__space' id='Portfolio'>
        <div className="heading">
                <h1 className="heading">My Latest Project</h1>
              
            </div>
      <div className="container">
        <div className="row">

            <div className="col__3 ">
                <div className="project__box pointer relative " >
                    <div className="project__img__box pointer relative">
                        <div className="project__box__img">
                            <img src={Project1} alt="" className="project__img" />

                        </div>
                        <div className="mask__effect">
                        </div>

                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">E-Commerce Website</h5>
                        <h4 className="project__text">This website is build using React.</h4>
                       
                    <div className="buttons">
                        <a href="https://huzaif00.github.io/EcommerceWebsite.github.io/" className='project__btn'>View Project</a>
                        <a href="https://github.com/huzaif00/EcommerceWebsite.github.io" className='project__btn'>View Source Code</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__img__box pointer relative">
                        <div className="project__box__img">
                            <img src={Project2} alt="" className="project__img" />

                        </div>
                        <div className="mask__effect">
                        </div>

                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Love Calculator</h5>
                        <h4 className="project__text">This project is based on java script.</h4>
                       
                    <div className="buttons">
                        <a href="https://huzaif00.github.io/lovecalculator.github.io/" className='project__btn'>View Project</a>
                        <a href="https://github.com/huzaif00/lovecalculator.github.io" className='project__btn'>View Source Code</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__img__box pointer relative">
                        <div className="project__box__img">
                            <img src={Project2} alt="" className="project__img" />

                        </div>
                        <div className="mask__effect">
                        </div>

                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Ticket Booking System</h5>
                        <h4 className="project__text">This project is build on C++.In this you can book railway,flight,bus tickets. You can run this code in C++ compiler.</h4>
                       
                    <div className="buttons">
                        
                        <a href="https://github.com/huzaif00/Ticket-booking-System/blob/main/GUJ.CPP" className='project__btn'>View Source Code</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col__3 ">
                <div className="project__box pointer relative " >
                    <div className="project__img__box pointer relative">
                        <div className="project__box__img">
                            <img src={Project4} alt="" className="project__img" />

                        </div>
                        <div className="mask__effect">
                        </div>

                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Tesla Clone</h5>
                        <h4 className="project__text">This is tesla clone build onlu using html ,css and java script.</h4>
                       
                    <div className="buttons">
                        <a href="https://huzaif00.github.io/teslaclones.github.io/" className='project__btn'>View Project</a>
                        <a href="https://github.com/huzaif00/teslaclones.github.io" className='project__btn'>View Source Code</a>
                        </div>
                    </div>

                </div>
            </div>
           
           
        </div>
      </div>
    </div>
  )
}

export default Project
