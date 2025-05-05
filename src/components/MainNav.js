import React from 'react'
import mainLogo from "../assets/imgs/checklist_logo.png"

export default function MainNav() {
  return (
    <nav className='main-nav'>
      <a href='#'>
        <img className='main-nav-logo' src={mainLogo} alt="A Checklist For Life Logo" />
      </a>
      <div className='main-nav-right'>
        <a className='main-nav-link'>Travel</a>
        <a className='main-nav-link'>Health</a>
        <a className='main-nav-link'>Career</a>
        <a className='main-nav-link'>Dating</a>
        <a className='main-nav-link'>Habits</a>
        <a className='main-nav-link'>Finance</a>
        {/* <a className='main-nav-link'>Blog</a> */}
      </div>
    </nav>
  )
}
