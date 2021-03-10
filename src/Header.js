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
        <HeaderOption Icon={HomeIcon} title="HOME" />
        <HeaderOption Icon={InfoIcon} title="ABOUT US" />
        <HeaderOption Icon={AccountTreeIcon} title="PROJECTS" />
        <HeaderOption Icon={LocalLibraryIcon} title="OPEN VEGA LIB" />
      </div>
    </nav>
  )
}

export default Header
