import React from 'react'

const PriceCard = ({price, type}) => {
  return (
    <div className='container7'>
      <div className="PriceContainer">
      $<span className='Price'>{price}</span>/month
      </div>
      <button className='Type'>{type}</button>
      <ul className='List'>
         <li className='ListItem'>200 Hand-Crafted Template</li>
         <li className='ListItem'>Exclusive Support</li>
         <li className='ListItem'>50+ PreBuilt 
         Website</li>
         <li className='ListItem'>Premium Plugins</li>
      </ul>
      <button className='ButtonPriceCard'>Join Now</button>
      
      
    </div>
  )
}

export default PriceCard
