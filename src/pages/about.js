import * as React from 'react'
import Navbar from '../components/Navbar'
import Layout from './../components/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default AboutPage