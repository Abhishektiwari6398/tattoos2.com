import Services from '../components/Services'
import About from '../components/About'
import Navbar from '../components/Navbar'
import React from 'react'
import Artists from '../components/Artists'
import Gallery from '../components/Gallery'
import CustomerSays from '../components/CustomerSays'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <About />
      <Services/>
      <Artists/>
      <Gallery/>
      <CustomerSays/>
      <Footer/>
    </>
  )
}

export default page