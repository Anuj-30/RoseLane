import React, { useState } from 'react'
import products from '../../data/products';
import ProductCard from '../shop/ProductCard';
const Search = () => {
    const [searchQuery, setsearchQuery] = useState('');
    const [filteredProducts, setfilteredProducts] = useState(products)
    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
       
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query)
        );
        setfilteredProducts(filtered);
    }
  return (
     <>
    <section className='section__container bg-primary-light'>
      <h2 className='section__header capitalize'>Search Page</h2>
      <p className='section__subheader'>Browse a diverse range of categories from dresses to
        versatile accessories, each designed to elevate your style.
      </p>
      </section>

      <section className='section__container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
            <input type='text' value={searchQuery} onChange={(e)=> setsearchQuery(e.target.value)}
             className='search-bar w-full max-w-4xl p-2 border rounded' placeholder='Search For Products...' id=''></input>
             <button onClick={handleSearch}
             className='search-button w-full md:w-auto bg-primary text-white py-2 px-8 rounded '>Search</button>
        </div> 

<ProductCard products={filteredProducts} />
        </section>
      </>
  )
}

export default Search