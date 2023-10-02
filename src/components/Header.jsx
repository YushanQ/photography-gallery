import React from 'react'
import { Button } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'

export const Header = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div className='d-flex header justify-content-between align-items-center'>
      <button className={navbarOpen ? 'menu-btn expanded' : 'menu-btn'} onClick={() => setNavbarOpen((prev) => !prev)}>
        <div className='menu-icon-container'>
          <span className='icon-line'></span>
          <span className='icon-line'></span>
          <span className='icon-line'></span>
        </div>
      </button>
      <div className='logo'>Photography Today</div>
      <div className='contact-btn'>
        <HashLink to="#contact" smooth>
          <Button variant="dark">Get A Quote</Button>
        </HashLink>
      </div>
    </div>
  )
}
