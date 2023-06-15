import React from 'react'
import { BsCurrencyPound } from 'react-icons/bs'

const Price = ({price, title, description}) => {
    return (
        <div className='price-card'>
            <div className="cost">
                <BsCurrencyPound className='pound-icon' />
                <h1>{price}</h1>
                </div>
            <h1 className='package' style={{textDecoration: 'underline'}}>{title}</h1>
            <div className='price-points'>{description}</div>
        </div>
    )
  }

export default Price