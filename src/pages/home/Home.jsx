//import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
       <div className="home__data">
         <h1 className="home__title"><span>Im Miss Muhila Vijayakumar.</span><br/> Full Stack Developer
         </h1>

         <p className="home__description">
         A passionate Full Stack Developer skilled in both frontend and backend
         technologies. Experienced in building user-focused applications using
         React.js, Java, and Spring Boot. Continuously learning and staying updated with industry trends to deliver scalable and innovative software
    solutions
          </p>

        <Link to ='/about' className='button'>
          More About Me<span className='button__icon'>
          <FaArrowRight/>
          </span>

        </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home