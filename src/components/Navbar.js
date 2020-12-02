import React from 'react'
import {  NavLink, withRouter } from 'react-router-dom'
const Navbar = (props) => {

  return(
    <nav className="nav-wrapper pink darken-3" style={navWrapper}>
      <div className="container" style={container}>
        <a className="brand-logo" style={brandLogo}>Poke'Times</a>
        <ul className="right">
          <li><NavLink to="/main"  style={liStyle}>Main</NavLink></li>
          <li><NavLink to="/Admin"  style={liStyle}>Admin</NavLink></li>
          <li><NavLink to="/home" style={liStyle}>Home</NavLink></li> 
          <li><NavLink to="/about" style={liStyle}>About</NavLink></li> 
          <li><NavLink to="/contact" style={liStyle}>Contact</NavLink></li>
          <li><NavLink to="/Ext" style={liStyle}>Ext</NavLink></li> 
          <li><NavLink to="/User" style={liStyle}>User</NavLink></li>
          <li><NavLink to="/Game" style={liStyle}>Game</NavLink></li> 
          <li><NavLink to="/Calendar" style={liStyle}>Calendar</NavLink></li>
          <li><NavLink to="/findClient" style={liStyle}>findClient</NavLink></li>

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
  position:'inherit',
  color:'burlywood'
}
const liStyle = {
  color: 'burlywood'
}

export default withRouter(Navbar)  