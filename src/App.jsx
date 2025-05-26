import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from "./Homepage";
import WhatsAppButton from './components/WhatsAppButton';
import NavBar from './components/Navbar';

import CallUs from './components/CallUs';
import ContactUs from './Homepage/Contactus';
import CustomerReviews from './components/CustomerReviews';
import Consulting from './components/Consulting';
import AmazonAppeals from './Homepage/AmazonAppeals';
import FundsDisbursement from './Homepage/FundsDisbursement';
import BrandRegistry from './Homepage/BrandRegistry';

import AccountAppeals from './Homepage/EssentialServices/AccountAppeals';
import AccountSupport from './Homepage/EssentialServices/AccountSupport';
import ASINAppeals from './Homepage/EssentialServices/ASINAppeals';
import Reimbursements from './Homepage/EssentialServices/Reimbursements';
import SellerAccountProtection from "./Homepage/EssentialServices/SellerAccountProtection";
import VirtualAssistance from './Homepage/EssentialServices/VirtualAssistance';

import AddCart from './AddCart';
import PaymentOptions from './PaymentOption/PaymentOptions'; // Updated import
import WisePayment from './PaymentOption/WisePayment';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-us" element={<CallUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/brand-registry" element={<BrandRegistry />} />
        <Route path="/amazon-appeals" element={<AmazonAppeals />} />
        <Route path="/funds-disbursement" element={<FundsDisbursement />} />

        {/* Essential Services Routes */}
        <Route path="/account-appeals" element={<AccountAppeals />} />
        <Route path="/account-support" element={<AccountSupport />} />
        <Route path="/asin-appeals" element={<ASINAppeals />} />
        <Route path="/reimbursements" element={<Reimbursements />} />
        <Route path="/account-protection" element={<SellerAccountProtection />} />
        <Route path="/virtual-assistant" element={<VirtualAssistance />} />

        {/* Cart and Payment */}
        <Route path="/addcart" element={<AddCart />} />
        
        {/* Payment Routes */}
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/wise-payment" element={<WisePayment />} />

        <Route path="/contact-today" element={<ContactUs />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;