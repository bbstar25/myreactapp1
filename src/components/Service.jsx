import React, {useState}   from 'react'
import photo03 from '../img/photo03.png'
import MiniCard from './MiniCard'

const Service = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='container4'>
      
      <div className='left4'>
       <img open={open} className='imageService' src={photo03} alt="" />
       
      </div>

      <div className='right4'>
       <div className='wrapper2'>
        <h1 className="title2">Simple process to start</h1>
        <p className="desc2">
          We provide digital experience services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communication requirements. We work with you, not for you. Although we have a great resources 
        </p>
        <div className='CardContainer'>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        </div>
        <button onClick={() => setOpen(true)} className="ButtonService"><span className='iconSpan'></span> How it works</button>
       </div>
    </div>
       
    </div>
  )
}

export default Service
