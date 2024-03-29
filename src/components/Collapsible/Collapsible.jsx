import React, { useState } from 'react'
import './Collapsible.css'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown  } from "react-icons/md";


const Collapsible = (props) => {
    const [toggle, settoggle] = useState(false)
  return (
    <div className='collapsible'>
        <div className='toggle-item' onClick={() => settoggle(!toggle)}>
            <p className='toggle-item-title'>{props.toggletitle}</p>
            {toggle && <MdOutlineKeyboardArrowDown className='toggle-item-icon' color='white' size={20}/>}
            {!toggle && <MdOutlineKeyboardArrowRight className='toggle-item-icon' color='white' size={20}/>}
        </div>
    {toggle &&         
        <div className='toggle-item-active'>
            <p className='toggle-item-description'>{props.toggledescription}</p>        
        </div>
    }
    </div>
  )
}

export default Collapsible