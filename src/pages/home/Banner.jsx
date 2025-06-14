import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../../assets/R.png'

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>Up To 20% Discount on</h4>
            <h1>Girl's Fashion</h1>
            <p>Discover the latest trends and express your unique style with our women's Fashion
                website. Explor a curated collection of clothing, accessories, and more, designed 
                to empower and inspire.
            </p>
            <button className='btn'><Link to="/shop">Explore Now</Link>
            </button>
        </div>
        <div className='header__image'>
            <img src={BannerImage} alt="banner" className='' />
        </div>
    </div>
  )
}

export default Banner