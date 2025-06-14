import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartModel from '../pages/shop/CartModel';


const Navbar = () => {
    
    const  products= useSelector((state)=>state.cart.products)
    const [isCartopen, setisCartopen] = useState(false);
    const handleCart=()=>{
        setisCartopen(!isCartopen)
    }
   
    return (
        <header className='fixed-nav-bar w-nav'>
            <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
                <ul className='nav__links'>
                    <li className='link'><Link to="/RoseLane">Home</Link></li>
                    <li className='link'><Link to="/shop">Shop</Link></li>
                    <li className='link'>Pages</li>
                    <li className='link'>Contact</li>
                </ul>
                {/* logo*/}
                <div className='nav__logo'>
                    <Link to="/">RoseLane<span>.</span></Link>
                </div>

                <div className='nav__icons relative' >
                    <span><Link to="/search">
                        <i className="ri-search-line"></i>
                    </Link></span>
                    <span>
                        <button onClick={handleCart} className='hover:text-primary'>
                            <i className="ri-shopping-bag-line"></i>
                            <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>{products.length}</sup>
                        </button>
                    </span>
                    <span>
                        <Link to="/login">
                            <i className="ri-user-line"></i>
                        </Link>
                    </span>
                </div>
            </nav>

            {
                isCartopen && <CartModel products={products} isOpen={isCartopen} onClose={handleCart}/>
            }
        </header>
    )
}

export default Navbar;