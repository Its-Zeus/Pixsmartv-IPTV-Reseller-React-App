import React from 'react'
import './OurServices.css'
import { FaListUl, FaServer, FaCcMastercard } from "react-icons/fa";
import { MdDevices, MdOutlineSupportAgent  } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";


const OurServices = () => {
  return (
    <section className='ourservices-section'>
        <p className="subheading">Our Services</p>
        <h3 className="heading">WHY CHOOSE US?</h3>
        <p className="description">We Have A Comfortable Interface And Easy IPTV Website To Navigate, No Complicated Payment Process With Easy Service To Setup</p>
        <div className="services-grid">
            <div className="service-card">
                <FaListUl size="70px" color="var(--color-blue)"/>
                <p className="service-card-title">Watching Live TV with Zero Effort!</p>
                <p className="service-card-description">More than 20.000 LIVE TV Channels & 100,000 + MOVIES & TV Shows (VODs).</p>
            </div>
            <div className="service-card">
                <FaServer size="70px" color="var(--color-blue)"/>
                <p className="service-card-title">Most Stable Server</p>
                <p className="service-card-description">We Have More Than 100 Best And Stable Servers. You Do Not Need To Worry About The Stability Of The Server.</p>
            </div>
            <div className="service-card">
                <FaCcMastercard size="70px" color="var(--color-blue)"/>
                <p className="service-card-title">7 Days money back guarantee</p>
                <p className="service-card-description">Within 7 Days Of Your Purchase You Have The Option To Cancel Our IPTV Subscription If You Are Not Satisfied. Then You Will Receive A Full Refund From Us.</p>
            </div>
            <div className="service-card">
                <MdDevices size="70px" color="var(--color-blue)"/>
                <p className="service-card-title">Work on All Devices</p>
                <p className="service-card-description">Your Favorite Shows And Channels On Any Device, From Any Location.</p>
            </div>
            <div className="service-card">
                <GiTakeMyMoney size="70px" color="var(--color-blue)"/>
                <p className="service-card-title">Affordable Prices</p>
                <p className="service-card-description">Compared To Our Competitors We Give You The Best Prices That You Never Find In Other Platform.</p>
            </div>
            <div className="service-card">
                <MdOutlineSupportAgent size="70px" color="var(--color-blue)"/>
                <p className="service-card-title">Customer service available 24/7</p>
                <p className="service-card-description">Our Customer Service Is Available 24/7 By E-Mail OR WhatsApp And We Will Help You In The Installation Of Your Subscription.</p>
            </div>
        </div>
    </section>
  )
}

export default OurServices