import React from 'react'
import { Link } from 'react-scroll'
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
        <div className='container'>
            <div className='banner'>
                <div className='top'>
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className='mid'>At Savory Express, we believe life is too short
                     for boring meals. That's why we're dedicated to serving up bold
                      flavors and unforgettable culinary experiences. Our passion for
                       food goes beyond the kitchen—we're on a mission to make every 
                       bite a celebration. Whether you're craving something classic 
                       or looking to try something new, we bring the best of both 
                       worlds to your plate. The only thing we're serious about is 
                       food, and we promise to deliver the freshest, most delicious 
                       dishes right to your table.
                </p>
                <Link to={"/"}>
                    Explore Menu{""}
                    <span>
                        <HiOutlineArrowRight />
                    </span>
                </Link>
            </div>
            <div className='banner'>
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About