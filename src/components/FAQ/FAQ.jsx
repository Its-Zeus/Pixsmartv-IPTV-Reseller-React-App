import React from 'react'
import Collapsible from '../Collapsible/Collapsible'
import './FAQ.css'
import { FaWhatsapp } from "react-icons/fa";



const FAQ = () => {
  return (
    <section className='faq-section'>
        <div className='faq'>   
            <p className="subheading">TESTIMONIALS</p>
            <h3 className="heading">What our clients say</h3>
            <Collapsible className='faq_collapsible' toggletitle="How Many Channel Do I Get?" toggledescription="Pixsmartv Provides around 20000+ live TV channels from the world in local and international languages. Instead of this, a user will also get 60,000 to 110,000+ VODS including TV Series, Movies, Dramas and so on."/>
            <Collapsible className='faq_collapsible' toggletitle="What Is Our Quality Servers?" toggledescription="We are first the best service provider on internet, and we provide no freezing technology with 99% uptime."/>
            <Collapsible className='faq_collapsible' toggletitle="What Types Of Devices Are Supported?" toggledescription="We support all kind of devices such as: MAG, Android Smart Phone, Android Boxes, Enigma, DreamBox, Vu+ (…), PC, VLC, Kodi/XBMC (…), Smart TV."/>
            <Collapsible className='faq_collapsible' toggletitle="How Will I Receive My Subscription?" toggledescription="After making a payment you’ll be contacted via email in less than 30 minutes with your logins credentials."/>
            <Collapsible className='faq_collapsible' toggletitle="Can I Cancel My Service?" toggledescription="We are not contracting with anyone and you are completely free to cancel our service at any time. Once you cancelled the service you won't be charged and the service will be ended automatically at the time when you purchase it."/>
            <h3 className="heading whatsapp">We're always here to help , Contact our support team 24/7.</h3>
            <a href='#' className='faq_whatsapp-button'><FaWhatsapp size={20} className='whatsapp-icon' /> CONTACT US ON WHATSAPP</a>
        </div>
    </section>
  )
}

export default FAQ