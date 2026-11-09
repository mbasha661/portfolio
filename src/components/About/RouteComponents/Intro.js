import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Mahaboob Basha A. S.</span>, from Tiruchirappalli, Tamil Nadu.</p>
                        <p data-aos='fade-right' data-aos-delay='200'>A full-stack developer trained through GUVI's Full Stack Development program, now pursuing an AI &amp; Machine Learning certification at IIT Patna.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>I build responsive web apps with JavaScript, React, Node.js, Express and MongoDB. My projects include FzeeLogBook, a live fleet-management app used for day-to-day vehicle and earnings tracking.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>Before moving into software, I spent 4+ years in healthcare revenue cycle management - work that taught me accuracy, ownership and structured problem-solving.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>I use AI tools such as ChatGPT as a development aid, always with my own review and testing.</p>

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
