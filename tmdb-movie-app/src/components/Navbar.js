import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="row mt-5 display-flex justify-content-space-evenly">
      <p style={{ color: "white" }}>Movies</p>
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
    </div>
    
  )
}

export default Navbar