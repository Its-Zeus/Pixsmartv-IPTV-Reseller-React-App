import React , { useState, useEffect, useRef } from 'react'
import pixlogowhite from '../../assets/pixsmartv.png'
import payimg from '../../assets/pay.svg'
import Channels from '../Channels/Channels'
import Guide from '../Guide/Guide'
import './Footer.css'

const Footer = () => {
    const [channelslist, showchannelslist] = useState(false)
    const [guide, showguide] = useState(false)
  return (
    <footer className='footer'>
        <Channels state={channelslist ? true : false} onclose={() => showchannelslist(!channelslist)}/>
        <Guide state={guide ? true : false} onclose={() => showguide(!guide)}/>
        <div className='about-us'>
            <img className='footer-logo' src={pixlogowhite} alt='pixsmartv'></img>
            <p className='about-us-description'>Pixsmartv, The Best IPTV Service, Has More Than 40,000 Satisfied Customers, Making It The Leading IPTV Provider Worldwide!</p>
        </div>
        <div >
            <div className='footer-links'>
                <a className='footer-link' href='/'>Home</a>
                <a className='footer-link' href='/#pricing'>Pricing</a>
                <a className='footer-link' onClick={() => showchannelslist(!channelslist)}>Channels</a>
                <a className='footer-link' onClick={() => showguide(!guide)}>Setup Guide</a>
                {/* <a className='footer-link' href='#'>Resellers</a>
                <a className='footer-link' href='#'>Refund Policy</a>
                <a className='footer-link' href='#'>Contact Us</a> */}
            </div>
        </div>
        <div className='footer-copyright'>
            <p className='footer-copyright-text'>Copyright © 2022 <strong style={{color: 'white'}}>Pixsmartv</strong> . All Rights Reserved.</p>
            <a className='contact-email' href='#'>contact@pixsmartv.com</a>
            <img className='footer-payments' src={payimg} alt='Payment Methods'></img>
        </div>
    </footer>
  )
}

export default Footer