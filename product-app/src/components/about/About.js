import React from 'react'
import './About.scss'
import assorted from '../../global/images/about-us-img.jpg'


const About = () => {
    
    return (
        <div className="about-container">

            <div className="about-top-image">
                <img src={assorted} />

            </div>

            <div className="about-top-content">
                
                <div>
                    <h1>Our Mission</h1>
                </div>

                <div>
                    <p>Fruit Spring was created to give back to the people. Our mission is to provide better access to the best quality fruit around the world from local growers. We beleive in supporting local communities and providing the best platform to do so. Food comes to us straight form the source and is delivered to your door at its freshest state. We beleive in less interaction from middlemen and more money for local farmers in your community.</p>
                </div>

            </div>

            <div className="about-middle-content">

            </div>


        </div>
    )
}

export default About