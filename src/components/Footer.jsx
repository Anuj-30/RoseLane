import React from 'react'
import instagram1 from '../assets/instagram-1.jpg'
import instagram2 from '../assets/instagram-2.jpg'
import instagram3 from '../assets/instagram-3.jpg'
import instagram4 from '../assets/instagram-4.jpg'
import instagram5 from '../assets/instagram-5.jpg'
import instagram6 from '../assets/instagram-6.jpg'
const Footer = () => {
  return (
   <> <footer className='section__container footer__container'>
        <div className='footer__col'>
            <h4>Contact info</h4>
            <p>
                <span><i className='ri-map-pin-2-fill'></i></span>
                123, New York City, USA
            </p>
            <p>
                <span><i className='ri-mail-fill'></i></span>
                support@gmail.com
            </p>
            <p>
                <span><i className='ri-phone-fill'></i></span>
                +1 234 567 890
            </p>
            </div>
            <div className='footer__col'>
                <h4>Company</h4>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Work With Us</a>
                <a href="/">Our Blogs</a>
                <a href="/">Terms & Conditions</a>

                </div>

                <div className='footer__col'>
                <h4>Useful Link</h4>
                <a href="/">Help</a>
                <a href="/">Track Your order</a>
                <a href="/">Men</a>
                <a href="/">Women</a>
                <a href="/">Dresses</a>

                </div>

                 <div className='footer__col'>
                <h4>Instagram</h4>
               <div className='instagram__grid'>
                <img src={instagram1} alt="Instagram 1" />
                <img src={instagram2} alt="Instagram 2" />
                <img src={instagram3} alt="Instagram 3" />
                <img src={instagram4} alt="Instagram 4" />
                <img src={instagram5} alt="Instagram 5" />
                <img src={instagram6} alt="Instagram 6" />
                </div>
                </div>
    </footer>

    <div className='footer__bar'>
        <p>© 2025 All rights reserved by xyz Fashion Store</p>
        </div>
        </>
  )
}

export default Footer