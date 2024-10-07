import React from 'react'
import Header from './Header'

const Home = () => {
    return (
        <>
        <Header />
        <div id="home">
            {/* background-image is placed here  */}
            <div className="container">
                <div className="header-text">
                    <p>Software Developer</p>
                    <h1>Hi, I'm <span>Aditya</span> <br />Kumar From India</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;