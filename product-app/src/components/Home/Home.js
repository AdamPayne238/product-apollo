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
                <div className="banner-text">
                    Farm Fresh Produce Shipped Nation Wide
                </div>
            </div>

            <div className="main-content">

                <div className="left-container">
                    <div className="text-left">
                        <p>lorem ispum  </p>
                    </div>
                    <div className="img-left">
                        <img src={imageOne} />
                    </div>
                </div>

                <div className="right-container">
                    <div className="text-right">
                        <p>section two text</p>
                    </div>
                    <div className="img-right">
                        <img src={imageTwo} />
                    </div>
                </div>

                <div className="left-container">
                    <div className="text-left">
                        <p>section three text</p>
                    </div>
                    <div className="img-left">
                        <img src={imageThree} />
                    </div>
                </div>

                <div className="right-container">
                    <div className="text-right">
                        <p>section four text</p>
                    </div>
                    <div className="img-right">
                        <img src={imageFour} />
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default Home