import React, { useState } from 'react'
import ProductCard from './ProductCard'
import products from '../../data/products.json' // Assuming you have a products data file


const TrendingProducts = () => {
    const [visibleProducts, setvisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setvisibleProducts(prevCount => prevCount + 4);
    }
  return (
   <section className='section__container product__container'>
    <h2 className='section__header'>Trending Products</h2>
    <p className='section__subheader mb-12'> Discover The Hottest Picks: Elevate your style with our curated collection of
    Trending Women's Fashion products. 
    </p>

<div className='mt-12'>
    <ProductCard products={products.slice(0,visibleProducts)} /></div>

    <div className='product__btn'>
        {
            visibleProducts < products.length &&(
                <button className='btn' onClick={loadMoreProducts}>
                    Load More
                </button>
            ) 
        }
    </div>
   </section>
  )
}

export default TrendingProducts