import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import 'tachyons/css/tachyons.min.css'
import './style.css'

export default () => (
  <div className="home flex flex-column white min-vh-100 bg-near-black">
    <Header />
    <Hero />
    <About />
    <Features />
    <Team />
    <Contact />
    <Footer />
  </div>
)
