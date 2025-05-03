import React from 'react'
import mainLogo from "../assets/imgs/checklist_logo.png"
import FeaturedLists from './FeaturedLists'

function Intro() {
  return (
    <div className='intro-section'>
      <div className='intro-content-container intro-1'>
        <nav className='main-nav'>
          <img className='main-nav-logo' src={mainLogo} alt="A Checklist For Life Logo" />
          <div className='main-nav-right'>
            <a className='main-nav-link'>Travel</a>
            <a className='main-nav-link'>Health</a>
            <a className='main-nav-link'>Career</a>
            <a className='main-nav-link'>Dating</a>
            <a className='main-nav-link'>Habits</a>
            <a className='main-nav-link'>Finance</a>
            <a className='main-nav-link'>Blog</a>
          </div>
        </nav>

        <div className='newsletter-signup'>
          <p className='section-header'>Want step-by-step guides for... doing life?</p>
          <button className='cta-btn newsletter-btn'>Join the Newsletter!</button>
   
        </div>
    
      </div>
      <FeaturedLists />
      <div className='intro-content-container intro-3'>
        <p className='sub-section-header'>Need guidance for a specific challenge you're going through? </p>
        <button className='cta-btn plans-btn'>Custom Checklist</button>
        <p className='section-copy'>
          Order a checklist that's tailored specifically for you, or sign up for 1-on-1 coaching, accountability check-ins, and more! 
        </p>
      </div>
   
    </div>
  )
}

export default Intro