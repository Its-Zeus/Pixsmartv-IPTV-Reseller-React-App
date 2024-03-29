import React, { useState, useEffect, useRef } from 'react'
import pixlogowhite from '../../assets/pixsmartv.png'
import './Navbar.css'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import Channels from '../Channels/Channels'
import Guide from '../Guide/Guide'





const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [channelslist, showchannelslist] = useState(false)
  const [guide, showguide] = useState(false)

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }

    if (toggleMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <nav className='app__navbar'>
      <Channels state={channelslist ? true : false} onclose={() => showchannelslist(!channelslist)}/>
      <Guide state={guide ? true : false} onclose={() => showguide(!guide)}/>
      <a className='app__navbar-logo' href='/'>
        <img src={pixlogowhite} alt='logo'/>
      </a>
      <ul className='app__navbar-links'>
        <a className="p__opensans" href="/">HOME</a>
        <a className="p__opensans" onClick={() => showchannelslist(!channelslist)}>CHANNELS LIST</a>
        <a className='p__opensans' href="/#pricing">OUR PLANS</a>
        {/* <li className="p__opensans">RESELLERS</li> */}
        <a className="p__opensans" onClick={() => showguide(!guide)}>SETUP GUIDE</a>
      </ul>
      <div className='app__navbar-button'>
        <a href='/#pricing' className='p__opensans'>IPTV SUBSCRIPTION</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <div className='app__navbar-button-smallscreen'>
          <a href='/#pricing' className='p__opensans'>IPTV SUBSCRIPTION</a>
        </div>
        <IoMenu className='show-overlay' size={33} color='white' onClick={() => setToggleMenu(true)}/>
        <div className={`transparent-overlay ${toggleMenu ? 'show' : ''}`}></div>
        <div className={`app__navbar-smallscreen-overlay ${toggleMenu ? 'show' : ''}`} ref={menuRef}>
          <IoMdCloseCircle className='hide-overlay' size={33} color='white' onClick={() => setToggleMenu(false)}/>
          <div className='app__navbar-smallscreen-logo'>
            <img src={pixlogowhite} alt='logo' />
          </div>
          <ul className='app__navbar-links-smallscreen'>
            <a className="p__opensans" href="/">HOME</a>
            <a className="p__opensans" onClick={() => showchannelslist(!channelslist)}>CHANNELS LIST</a>
            <a className='p__opensans' href="/#pricing">OUR PLANS</a>
            {/* <li className="p__opensans">RESELLERS</li> */}
            <a className="p__opensans" onClick={() => showguide(!guide)}>SETUP GUIDE</a>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar