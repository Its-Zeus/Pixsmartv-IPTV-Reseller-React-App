import './LogoCarousel.css'
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {images} from '../../constants/index'


const LogoCarousel = () => {
  return (
    <OwlCarousel className='owl-theme' loop margin={10} dots={false} autoplay={true} autoplayTimeout={1500}         responsive={{
      0: {
        items: 3 // For small devices like mobile phones
      },
      750: {
        items: 6 // For tablets
      },
      1024: {
        items: 8 // For larger screens like desktops
      }
    }}>
      {Object.entries(images).map(([key, value]) => (
        <div key={key} className="carousel-item">
          <img src={value} alt={key} />
        </div>
      ))}
    </OwlCarousel>
  )
}

export default LogoCarousel