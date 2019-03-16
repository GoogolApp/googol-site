import React from 'react'
import Header from '../components/Header'
import Team from '../components/Team'

import 'tachyons/css/tachyons.min.css'
import './style.css'

export default () => (
  <div className="home flex flex-column white min-vh-100 bg-near-black">
    <Header />
    <Team />
  </div>
)
