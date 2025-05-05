import React from 'react'
import FeaturedLists from './FeaturedLists'
import MainNav from './MainNav'

function Intro() {
  return (
    <div className='intro-section'>
      <div className='intro-content-container intro-1'>
        <MainNav />
        <div className='newsletter-signup'>
          <p className='section-header'>Want step-by-step guides for... doing life?</p>
          <button className='cta-btn newsletter-btn'>Join the Newsletter!</button>
   
        </div>
    
      </div>
      <FeaturedLists />
      <div className='intro-content-container intro-3'>
        <p className='sub-section-header'>Subscribe for even more impact!</p>
        <button className='cta-btn plans-btn'>Custom Checklist</button>
        <p className='section-copy'>
          Order a checklist that's tailored specifically for you, or sign up for 1-on-1 coaching, accountability check-ins, and more! 
        </p>
      </div>
   
    </div>
  )
}

export default Intro