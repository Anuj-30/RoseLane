import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import products  from '../../data/products';
import ProductCard from '../shop/ProductCard';
const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
      const filter = products.filter((product) => product.category === categoryName.toLowerCase());
    setfilteredProducts(filter);
    }, [categoryName])

    useEffect(() => {
     window.scrollTo(0, 0);
    })
    
  return (
    <>
    <section className='section__container bg-primary-light'>
      <h2 className='section__header capitalize'>{categoryName}</h2>
      <p className='section__subheader'>Browse a diverse range of categories from dresses to
        versatile accessories, each designed to elevate your style.
      </p>
      </section>
      <div className='section__container'>
        <ProductCard products={filteredProducts}/>
      </div>
      </>
   )
}

export default CategoryPage