import * as React from 'react'
import Navbar from '../components/Navbar'
import Layout from './../components/Layout'

const AboutPage = () => {
  return (
    <div>
      <Navbar pageTitle="About Me"></Navbar>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </div>
  )
}

export default AboutPage