import React from 'react'
import  dealImg from '../../assets/deals.png'
const DealSection = () => {
  return (
    <section className='section__container deals__container'>
       <div className='deals__image'>
        <img src={dealImg} alt="Deals" />
        
        </div>
        <div className='deals__content'>

            <h5>Up to 50% off</h5>
            <h4>Deal of the Month</h4>
            <p>Our Women's fashion deal of the Month is here to make your style  dreams a 
                reality without breaking your bank.Discover the latest trends and express your unique   </p>
          
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Min</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>40</h4>
                    <p>Sec</p>
                </div>
                </div>
                  </div>
    </section>
  )
}

export default DealSection