  import React from 'react';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

  import Home from "./Homepage";
  import WhatsAppButton from './components/WhatsAppButton';
  import NavBar from './components/Navbar';

  import CallUs from './components/CallUs';
  import ContactUs from './Homepage/Contactus';          // moved to Homepage folder
  import CustomerReviews from './components/CustomerReviews';
  import Consulting from './components/Consulting';
  import AmazonAppeals from './Homepage/AmazonAppeals';   // moved to Homepage folder
  import FundsDisbursement from './Homepage/FundsDisbursement';// moved to Homepage folder
  import BrandRegistry from './Homepage/BrandRegistry';   // moved to Homepage folder
// Import Essential Services components
import AccountAppeals from './Homepage/EssentialServices/AccountAppeals';
import AccountSupport from './Homepage/EssentialServices/AccountSupport';
import ASINAppeals from './Homepage/EssentialServices/ASINAppeals';
import Reimbursements from './Homepage/EssentialServices/Reimbursements';
import SellerAccountProtection from './Homepage/EssentialServices/SellerAccountProtection';
import VirtualAssistance from './Homepage/EssentialServices/VirtualAssistance';

  function App() {
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
        <Route path="/seller-account-protection" element={<SellerAccountProtection />} />
        <Route path="/virtual-assistance" element={<VirtualAssistance />} />
          <Route path="/contact-today" element={<ContactUs />} />  {/* Same component, different route */}
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    );
  }

  export default App;
