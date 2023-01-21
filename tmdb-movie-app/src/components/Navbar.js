import React,{useRef} from 'react'
import { Link} from 'react-router-dom'
import { IoHome, IoCompassOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navContainerWidth = useRef(null)

  const handleMenuOpen = () => {  
    setMobileMenu(!mobileMenu)
    navContainerWidth.current.style.width = '85vw'
  }
  
  const handleMenuClose = () => {  
    setMobileMenu(!mobileMenu)
    navContainerWidth.current.style.width = '0'
  }
  
 

  return (
    <>
    <div className='navContainer'>
      <div className='navLogo'>
        <h1 className='text-white'>Movies</h1>
      </div>

     <div className='navButton'>
     {!mobileMenu ? <IoMenuOutline  onClick={() => handleMenuOpen()} size={55} color="white" /> : <IoCloseOutline  onClick={() => handleMenuClose()} size={55} color="white" />}
     </div>
      <div className={`navContainerModal` } ref={navContainerWidth} >
        <div className={`${!mobileMenu ? 'hide' : 'block' } navModalLink--container ` } >
          <Link to="/"><IoHome/> <span id="home" onClick={() => handleMenuClose()}>Home</span></Link>
          <Link to="/discover"><IoCompassOutline id="discover"/> <span  onClick={() => handleMenuClose()}>Discover</span></Link>
        </div>
      </div>
    </div>
    
    <div className='navDesktopContainer'>
    <p>Movies</p>
      <nav className='sideBar'>
        
        <div className='d-flex flex-column'>
          <Link to="/"><IoHome /> Home</Link>
          <Link to="/discover"><IoCompassOutline /> Discover</Link>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar