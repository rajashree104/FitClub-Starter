import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
const Hero = () => {
  return (
    <div className='hero'>
         <div className='left-h'>
            <Header/>
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>
                        Ideal body
                    </span>
                </div>
                <div >
                    <span>
                    In here we will help You to Shape and build Your ideal body
                    and live up your life to fullest
                    </span>
                
                </div>
            </div>
             </div> 
         <div className='right-h'>right-h </div> 

    </div>
  )
}

export default Hero