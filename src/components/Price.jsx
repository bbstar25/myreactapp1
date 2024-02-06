import React from 'react'
import PriceCard from './PriceCard'


const price = () => {
  return (
    <div className='container6'>
       <PriceCard price="10" type="Basic"></PriceCard>
       <PriceCard price="20" type="Premium"></PriceCard>
       <PriceCard price="30" type="Advanced"></PriceCard>
    </div>
  )
}

export default price
