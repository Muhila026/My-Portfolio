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
         <h1 className="home__title"><span>Im Miss Muhila Vijayakumar.</span> Frontend Developer
         </h1>

         <p className="home__description">
           Enthusiastic and dedicated Frontend Developer with a strong foundation
           in HTML, CSS, JavaScript, and modern frameworks like React.js. 
           Passionate about crafting responsive, user-friendly interfaces and 
           enhancing web accessibility. Continuously learning and adapting to 
           the latest UI/UX trends to deliver seamless digital experiences.
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