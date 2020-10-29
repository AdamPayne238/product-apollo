import React from 'react'
import banner from '../../global/images/banner.jpeg'


const Home = () => {
    console.log(banner)

    return (
        <div className="home-container">

            <div className="home-banner">
                <img src={banner} />
            </div>

        </div>
    )
}

export default Home