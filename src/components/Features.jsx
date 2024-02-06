import React from 'react'
import photo02 from '../img/photo02.png';
import AnimatedShapes from './AnimatedShapes';

const Features = () => {
  return (
    <div className='container3'>
      <div className='left3'>
       <img className='imagefeature' src= {photo02} alt="" />
      </div>

      <div className='right3'>
         <span className='title1'>
         <b>good</b> design <br />
         <b>good</b> business
         </span>
         <span className='subtitle2'>we know that good design means good business</span>
         <p className='desc1'>we help our clients succeed by creating brand identities, design experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
         <span className='subtitle2'>we know that good design means good business</span>
         <button className='Buttonfeature'>Learn More</button>
    </div>
    <AnimatedShapes></AnimatedShapes>
    </div>
  )
}

export default Features

