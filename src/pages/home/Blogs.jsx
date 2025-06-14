import React from 'react'
import BlogData from '../../data/Blogs.json'
const Blogs = () => {
    console.log(BlogData);
  return (
    <section className='section__container blog__container'>
        <h2 className='section__header'>Latest from Blogs</h2>
        <p className='section__subheader'>Elevate your wardrobe with our freshest style tips
            , where we share the hottest trends, styling tips, and fashion inspiration.</p>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                BlogData.map((blog) => (
                    <div key={blog.id} className='blog__card cursor-pointer hover:scale-105 transition-all duration-500 mt-16'>
                        <img src={blog.imageUrl} alt="Blog Image" />
                        <div className='blog__card__content'>
                            <h4>{blog.subtitle}</h4>
                            <p>{blog.title}</p>
                            <p>{blog.date}</p>
                        </div>
                    </div>

                ))
            }
            </div>
        </section>
  )
}

export default Blogs