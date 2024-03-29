import React from 'react'
import {images} from '../../constants/index'
import './DontMiss.css'

const DontMiss = () => {
  return (
    <section className='dontmiss-section'>
        <div className="dontmiss-flex">
            <div className="dontmiss-text">
                <h6 className="heading">Pixsmartv</h6>
                <h2 className="subheading">Catch all the entertainment and the biggest sports events you love with our IPTV service!</h2>
                <p className="description">Our provider offers all your favorite country packs, with over 22,000 channels, 120,000+ VOD titles, and even +200 adult channels. We are the number one IPTV provider, offering the most affordable pricing plans on all your devices. Say goodbye to freezing and buffering, as our advanced solutions ensure a lag-free viewing experience.</p>
                <a href='/#pricing' className='order-button'>50% OFF - JUST FOR TODAY!</a>
            </div>
            <div className="dontmiss-channels-container">
                <div className="dontmiss-channels">
                    <div className="channel-container">
                        <img className='channel-img' src={images.directTv} alt="directTv" />
                    </div>
                    <div className="channel-container">
                        <img className='channel-img' src={images.nbaLogo} alt="nba" />
                    </div>
                    <div className="channel-container">
                        <img className='channel-img' src={images.skySports} alt="skySports" />
                    </div>
                    <div className="channel-container">
                        <img className='channel-img' src={images.beinSportLogo} alt="beinSport" />
                    </div>
                    <div className="channel-container">
                        <img className='channel-img' src={images.premierLeagueLogo} alt="premierLeague" />
                    </div>
                    <div className="channel-container">
                        <img className='channel-img' src={images.espnLogo} alt="espn" />
                    </div>
                    <div className="channel-container">
                        <img className='channel-img' src={images.nhlLogo} alt="nhl" />
                    </div>
                    <div className="channel-container"> 
                        <img className='channel-img' src={images.fuboTv} alt="fuboTv" />
                    </div>
                    <div className="channel-container">
                        <img className='channel-img' src={images.peacockLogo} alt="peacock" />
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default DontMiss