import React from 'react'

const Contact = () => {
  return (
    <div className='container8'>
      <div className='wrapper3'>
      <div className="formContainer">
        <h1 className="titleContact">Question? <br /> Let's Get In Touch</h1>
        <div className="FormContact">
        <div className="leftForm">
        <input className='InputContact' type="text"  placeholder='Your Name'/>
        <input className='InputContact' type="text" placeholder='Your Email' />
        <input className='InputContact' type="text" placeholder='Subject' />
      </div>
        <div className="rightForm">
            <textarea className='textareaContact' placeholder='Your Message'></textarea>
            <button className="ButtonContact">Send</button>
        </div>
        </div>
     
      </div>
      <div className="addressContainer">
        <div className="addressItem">
          <span className="textContact">
             25, Alhaji Muhili str., Oregun Lagos, Nigeria
          </span>
        </div>
        <div className="addressItem">
          <span className="textContact">
             09136117727
          </span>
          <span className="textContact">
             09136117727
          </span>
        </div>
        <div className="addressItem">
          <span className="textContact">
            azeezonitiri2017@gmail.com
          </span>
          <span className="textContact">
            babatundeonitiri2024@gmail.com
          </span>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
