import React from 'react'
import banner from '../../global/images/banner.jpeg'
import imageOne from '../../global/images/abstract-fruit-1.jpg'
import imageTwo from '../../global/images/abstract-fruit-2.jpg'
import imageThree from '../../global/images/abstract-fruit-3.jpg'
import imageFour from '../../global/images/abstract-fruit-4.jpg'



const Home = () => {
    console.log(banner)

    return (
        <div className="home-container">

            <div className="home-banner">
                <img src={banner} />
            </div>

            <div className="section-one">
                <div className="section-one-text">
                    <p>section one text</p>
                </div>
                <div className="section-one-img">
                    <img src={imageOne} />
                </div>
            </div>

            {/* <div className="section-two">
                <div className="section-two-text">
                    <p>section two text</p>
                </div>
                <div className="section-two-img">
                    <img src={imageTwo} />
                </div>
            </div>

            <div className="section-three">
                <div className="section-three-text">
                    <p>section three text</p>
                </div>
                <div className="section-three-img">
                    <img src={imageThree} />
                </div>
            </div>

            <div className="section-four">
                <div className="section-four-text">
                    <p>section four text</p>
                </div>
                <div className="section-four-img">
                    <img src={imageFour} />
                </div>
            </div> */}

        </div>
    )
}

export default Home