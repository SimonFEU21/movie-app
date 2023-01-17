import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome, IoCompassOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';


const Navbar = ({isMobile}) => {

  const [hamburgerMenu, setHamburgerMenu] = useState(false);


  console.log(isMobile);
  return (
    <>
      {isMobile ? (
      <nav> 
      <div className='d-flex justify-content-between align-items-center py-3 px-3'>
           <h1 className='text-white text-center'>Movies</h1>
          {hamburgerMenu ? (
            <IoCloseOutline  onClick={ () => setHamburgerMenu(false)} size={55} color="white" />
          ) : (
            <IoMenuOutline onClick={ () => setHamburgerMenu(true)} size={55} color="white" />
            )} 
      </div>
        { hamburgerMenu &&
        <div className='d-flex flex-column z-3 position-absolute p-5 rounded-3 bg-dark w-75 h-100'>
          <Link to="/"><IoHome /> Home</Link>
          <Link to="/discover"><IoCompassOutline /> Discover</Link>
        </div>
        }
      </nav>



      ) : (
      <div className={`col-1 border-end navBar ${isMobile && "hide"} `}>
      <nav className='sideBar'>
        <p>Movies</p>
        <div className='d-flex flex-column'>
          <Link to="/"><IoHome /> Home</Link>
          <Link to="/discover"><IoCompassOutline /> Discover</Link>
        </div>
      </nav>
      </div>
    )}
   </> 

  )
} 

export default Navbar 

// ${styles.navbar}`}>