import React, {useState} from "react";
import "./home.css";
import logo from "./img/logo.png";
import {useEffect,useRef} from "react";
import Typical from 'react-typical'
import { Link } from 'react-scroll'

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(false);
   


  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
            <li className="nav__items mx__15">
              <Link style={{cursor: "pointer"}} to="Home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                </li>
                <li className="nav__items mx__15">
              <Link style={{cursor: "pointer"}} to="About" spy={true} smooth={true} offset={-100} duration={500}> About</Link>
               </li>
              
             
                <li className="nav__items mx__15">
                <Link style={{cursor: "pointer"}} to="Service" spy={true} smooth={true} offset={-100} duration={500}>Skill</Link>
                </li>
              
                <li className="nav__items mx__15">
                <Link style={{cursor: "pointer"}} to="Portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
                </li>
              
            
              
                <li className="nav__items mx__15">
                <Link style={{cursor: "pointer"}} to="Contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
                </li>
              
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li  className="sideNavbar">
              <Link onClick={() => setShow(!show)} style={{cursor: "pointer"}} to="Home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            </li>
            <li className="sideNavbar">
            <Link onClick={() => setShow(!show)} style={{cursor: "pointer"}} to="About" spy={true} smooth={true} offset={-100} duration={500}> About</Link>
            </li>
            <li className="sideNavbar">
            <Link onClick={() => setShow(!show)} style={{cursor: "pointer"}} to="Service" spy={true} smooth={true} offset={-100} duration={500}>Skill</Link>
            </li>
            <li className="sideNavbar">
            <Link onClick={() => setShow(!show)} style={{cursor: "pointer"}} to="Portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
            </li>
          
            <li className="sideNavbar">
            <Link onClick={() => setShow(!show)} style={{cursor: "pointer"}} to="Contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Mohd Huzaif</h2>
              <p className="home__text pz__10" style={{"color":"red","font-size":"30px"}}>I'm a 
                <Typical 
                loop={Infinity}
                wrapper="c"
                steps={
                  [
                    ' Java developer',2000,
                    ' Python developer',2000,
                    ' Web developer',2000,
                    ' Designer',2000,
                    ' Free Lancer',2000,
                  ]
                }/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;