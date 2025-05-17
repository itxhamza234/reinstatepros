import React from 'react';
import DemoCarousel from './carousel';
import Whychooseus from './Whychooseus';
import Contactus from './Contactus';
import EssentialServices from './EssentialServices';
import FaqSection from "./FAQSection/FaqSection";

 // Import the new FAQ component

/**
 * The main entry point for the homepage.
 * 
 * This component renders the demo carousel, why choose us section,
 * essential services section, FAQ section, and contact us section.
 * 
 * Note: NavBar has been removed as it's now handled at the App level
 * 
 * @returns {JSX.Element} The rendered homepage.
 */
function Home() {
  return (
    <main className="homepage">
      <DemoCarousel />
      <Whychooseus />
      <EssentialServices />
      <FaqSection /> {/* Added FAQ section here */}
      <Contactus />
    </main>
  );
}

export default Home;