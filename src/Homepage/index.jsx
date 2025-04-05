import React from 'react'
import NavBar from '../components/Navbar'
import DemoCarousel from './carousel'
import Whychooseus from './Whychooseus'
import Contactus from './Contactus'
function Home() {
  return (
    <>
    <NavBar/>
    <DemoCarousel></DemoCarousel>
    <Whychooseus/>
    <Contactus/>    
    </>
  )
}

export default Home