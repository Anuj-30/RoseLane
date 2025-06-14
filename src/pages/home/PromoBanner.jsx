import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className='ri-truck-line'></i></span>
            <h4>Free Delivery</h4>
            <p>Offer conveniece and the ability to shop from anywhere, anytime</p>
            </div>
             <div className='banner__card'>
            <span><i className="ri-money-dollar-circle-line"></i></span>
            <h4>Payment Methods</h4>
            <p>We support all kind of payment method cash,card or Online </p>
            </div>
             <div className='banner__card'>
            <span><i className='ri-user-voice-fill'></i></span>
            <h4>Strong support</h4>
            <p>Strong Customer support to assist customer queries </p>
            </div>
    </section>
  )
}

export default PromoBanner  