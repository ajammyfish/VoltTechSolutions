import React from 'react'
import Image from 'next/image'


const BlogCard = ({title, img, date}) => {
  return (
    <div className='blog-card'>
        <Image className='blog-card-img' src={img} alt='Background failed to load'/>
        <h1 style={{textDecoration: 'underline'}}>{title}</h1>
        <p>{date}</p>
    </div>
  )
}

export default BlogCard