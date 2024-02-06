import React from 'react'
import iphone01 from "../img/iphone01.png"
import AnimatedShapes from './AnimatedShapes';

const Intro = () => {
  return (
    <div className='container2'>
       <div className="left2">
        <h1 className="title">Adventure in creative age</h1>
        <p className='desc'>we believe that designing products and services in close partership with our clients is the only way to have a real impact on their business.</p>
        <div className="info">
          <button className="button">Start A Project</button>
          <div className="contact">
          <span className="phone">Call Us 09136117727</span> 
          <span className="contactText">For any question or concern</span> 
          </div>
        </div>
        
       </div>
       <div className="right2">
        <img src={iphone01} alt="" />
       </div>
       <AnimatedShapes></AnimatedShapes>
    </div>
  )
}

export default Intro
