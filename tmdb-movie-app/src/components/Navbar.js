import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={`row mt-5 display-flex justify-content-space-evenly ${styles.navbar}`}>
      <p style={{ color: "white" }}>Movies</p>
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
    </div>
    
  )
}

export default Navbar