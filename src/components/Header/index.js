import React from 'react'
import ReadingProgress from './ReadingProgress'

import brand from '../../../static/header/brand.png'
import './style.css'
import { useLaxElement, useLax } from '../../hooks/useLax'

const Link = ({ to, children }) => (
  <a className="link dim white no-underline grow pa2 mr2 b" href={to}>
    {children}
  </a>
)

const Header = () => {
  useLax()
  const ref = useLaxElement()
  return (
    <header
      ref={ref}
      data-lax-preset="eager"
      className="flex justify-between items-center fixed w-100 top-0 bg-black white ph5 z-max"
    >
      <ReadingProgress height={0.2} />
      <img src={brand} alt="Googol brand" />
      <nav className="dn db-l">
        <Link to="#about">About</Link>
        <Link to="#features">Features</Link>
        <Link to="#team">Team</Link>
        <Link to="#contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
