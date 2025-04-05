import React from 'react'
import NavBar from '../components/Navbar'
import DemoCarousel from './carousel'
import Whychooseus from './Whychooseus'
import Contactus from './Contactus'
import EssentialServices from './EssentialServices'
function Home() {
  return (
    <>
    <NavBar/>
    <DemoCarousel></DemoCarousel>
    <Whychooseus/>
    <EssentialServices/>
    <Contactus/>    
    </>
  )
}

export default Home