import Contact from './components/Contact';
import Footer from './components/Footer';
import Price from './components/Price'
import Service from './components/Service';
import Features from './components/Features';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import './App.css'
// import styled from "styled-components";

const App = () => {
//  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <div>
      <div className='ContainerAll'>
      <Navbar></Navbar>
      <Intro></Intro>
      <div className='IntoShape'></div>   
    </div>
    <div className='ContainerAll2'>
    <Features></Features>
     <div className='FeatureShape'></div>
    </div>
    <div className="ContainerAll3">
      <Service></Service>
     <div className='ServiceShape'></div>
    </div>
    <div className="ContainerAll4">
    <Price></Price>
    <div className="PriceShape"></div>
    </div>
    <div className="ContainerAll5">
    <Contact></Contact>
    </div>
    <div className="ContainerAll6">
    <Footer></Footer>
    </div>
    </div>    
      
  )
     
}

export default App
