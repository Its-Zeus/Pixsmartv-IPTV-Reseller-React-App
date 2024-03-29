import React from 'react'
import './Reviews.css'
import {revs} from '../../constants/index.js'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Reviews = () => {
  return (
    <section className='reviews-section'>
        <p className="subheading">TESTIMONIALS</p>
        <h3 className="heading">What our clients say</h3>
        <OwlCarousel className='reviews-carousel' loop margin={30} dots={false} nav={false} autoplay={true} autoplayTimeout={1500} responsive={{
            0: {
                items: 1 // For small devices like mobile phones
            },
            750: {
                items: 3 // For tablets
            },
            1024: {
                items: 5 // For larger screens like desktops
            },
            1700: {
                items: 6
            }
            }}>
                {Object.entries(revs).map(([key, value]) => (
                    <div key={key} className="carousel-reviews">
                        <img src={value} alt={key} />
                    </div>
                ))}
      </OwlCarousel>
    </section>

  )
}

export default Reviews