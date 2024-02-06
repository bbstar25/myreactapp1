import React from 'react'


const Navbar = () => {
  return (
    <div className='container'>
        <div className="wrapper">
        <div className="left">
        <span className='logo'>Agency</span>
              <ul>
                <li className="menuItem">Home</li>
                <li className="menuItem">Features</li>
                <li className="menuItem">Services</li>
                <li className="menuItem">Pricing</li>
                <li className="menuItem">Contact</li>
                </ul>       
        </div>
        
            
        <button>Join Now</button>
        </div>
       
    </div>
  )
}

export default Navbar
