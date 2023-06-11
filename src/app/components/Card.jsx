import React from 'react'
import Image from 'next/image'


const Card = ({title, description, img}) => {
  return (
    <div className='card'>
        <Image className='card-img' src={img} alt='Background failed to load'/>
        <h1 style={{textDecoration: 'underline'}}>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card