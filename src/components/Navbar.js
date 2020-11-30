import React from 'react'
import {  NavLink, withRouter } from 'react-router-dom'
const Navbar = (props) => {

  return(
    <nav className="nav-wrapper pink darken-3" style={navWrapper}>
      <div className="container" style={container}>
        <a className="brand-logo" style={brandLogo}>Poke'Times</a>
        <ul className="right">
          <li><NavLink to="/main">Main</NavLink></li>
          <li><NavLink to="/Redux">Redux</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li> 
          <li><NavLink to="/about">About</NavLink></li> 
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/Ext">Ext</NavLink></li> 
          <li><NavLink to="/User">User</NavLink></li>
          <li><NavLink to="/Game">Game</NavLink></li> 
          <li><NavLink to="/Calendar">Calendar</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

const navWrapper = {
  height:"200px"
}

const container = {
  flexDirection:'column'
}

const brandLogo = {
  position:'inherit'
}

export default withRouter(Navbar)  