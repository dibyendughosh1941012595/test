import React from 'react'
import './Header.css'
import Logo from './Logo.png'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import HeaderOption from './HeaderOption'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src={Logo} alt="OpenVega" />
      </Link>

      <div className="header_right">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={HomeIcon} title="HOME" className="name" />
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={InfoIcon} title="ABOUT US" />
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={AccountTreeIcon} title="PROJECTS" />
        </Link>
        <Link to="/OpenVegaLib" style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={LocalLibraryIcon} title="OPEN VEGA LIB" />
        </Link>
      </div>
    </nav>
  )
}

export default Header
