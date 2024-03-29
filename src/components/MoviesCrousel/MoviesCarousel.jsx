import './MoviesCarousel.css'
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {movies} from '../../constants/index'


const LogoCarousel = () => {
  return (
    <section className='movies-section'>
      <p className="subheading">INTERESTING</p>
      <h3 className="heading">Featured Shows</h3>
      <p className="description">We Have A Comfortable Interface And Easy IPTV Website To Navigate, No Complicated Payment Process With Easy Service To Setup</p>
      <OwlCarousel className='movies-carousel' loop margin={10} dots={false} autoplay={true} autoplayTimeout={1500} responsive={{
      0: {
        items: 3 // For small devices like mobile phones
      },
      750: {
        items: 4 // For tablets
      },
      1024: {
        items: 6 // For larger screens like desktops
      }}}>
        {Object.entries(movies).map(([key, value]) => (
          <div key={key} className="carousel-movie">
            <img src={value} alt={key} />
          </div>
        ))}
      </OwlCarousel>
    </section>
  )
}

export default LogoCarousel