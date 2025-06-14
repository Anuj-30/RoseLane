import React, {  useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import productsData from '../../data/products.json' // Assuming you have a products data file
import ShopFilter from './shopFilter'
const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'biege', 'green',],
    priceRange: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 - above', min: 200, max: Infinity },
    ]
}
const shopPage = () => {
    const [products, setProducts] = useState(productsData)
    const [filterState, setfilterState] = useState({
        category: 'all',
        color: 'all',
        priceRange: '',

    })
    const applyFilters = () => {
        let filteredProducts = productsData;

        if (filterState.category && filterState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filterState.category);
        }

        if (filterState.color && filterState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filterState.color);
        }
        if (filterState.priceRange) {
            const [minPrice, maxPrice] = filterState.priceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product =>
                product.price >= minPrice && product.price <= maxPrice
            );
        }
        setProducts(filteredProducts);
    }

    useEffect(() => {
        applyFilters();
    }, [filterState]);

    const clearFilters = () => {
        setfilterState({
            category: 'all',
            color: 'all',
            priceRange: '',
        });
    }
    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop</h2>
                <p className='section__subheader'>Browse a diverse range of categories from dresses to
                    versatile accessories, each designed to elevate your style.
                </p>
            </section>

            <section className='section__container'>

                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* left div */}
                 
                        <ShopFilter filters ={filters} filterState={filterState} setfilterState={setfilterState}
                        clearFilters={clearFilters} />
                    

                    {/* right div */}
                    <div >
                       <h3 className='text-xl font-medium mb-4'> Products Available: {products.length}</h3>
                        <ProductCard products={products} />
                    </div>


                </div>
            </section>
        </>
    )
}

export default shopPage