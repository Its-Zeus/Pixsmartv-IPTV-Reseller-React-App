import React, { useState, useEffect, useRef } from 'react'
import './Channels.css'
import { IoCloseSharp } from "react-icons/io5";


const Channels = (props) => {
    const [channelslist, showchannelslist] = useState(true)
    const channelsRef = useRef(null);
    console.log(props.state)

    useEffect(() => {
      function handleClickOutside(event) {
        if (channelsRef.current && !channelsRef.current.contains(event.target)) {
          showchannelslist(true);

        }
      }
  
      if (channelslist) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [channelslist]);
  return (
      <div className="all">
        <div className={`trans-overlay ${props.state ? 'show' : ''}`}></div>
        <div data-elementor-type="wp-page" data-elementor-id="2386" className={`channels-list ${props.state ? 'show' : ''}`}>
          <IoCloseSharp color='white' size={25} className='close' onClick={props.onclose}/>
          <div className="kolchi" ref={channelsRef}>
            <div className="search-bar">
                <input type="text" id="search-input" placeholder="Type your favorite channel..." onKeyUp={searchItems} />
            </div>
            <div className="boxx-wrapper">
                <div className="boxx"></div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Channels