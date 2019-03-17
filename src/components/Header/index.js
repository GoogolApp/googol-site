import React from 'react'
import brand from '../../../static/header/brand.png'
import './style.css'

const Link = ({ to, children }) => (
  <a className="link dim white no-underline grow pa2 mr2 b" href={to}>
    {children}
  </a>
)

const Header = () => (
  <header className="flex justify-between items-center fixed w-100 top-0 bg-black white ph5">
    <img src={brand} alt="Googol brand" />
    <nav>
      <Link to="#about">About</Link>
      <Link to="#features">Features</Link>
      <Link to="#team">Team</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  </header>
)

export default Header
