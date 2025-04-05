import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [appealsOpen, setAppealsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Function to toggle the visibility of the appeals dropdown
  const toggleAppeals = () => {
    setAppealsOpen(!appealsOpen);
    setServicesOpen(false);  // Close services dropdown when appeals dropdown is opened
  };

  // Function to toggle the visibility of the services dropdown
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setAppealsOpen(false);  // Close appeals dropdown when services dropdown is opened
  };

  return (
    <div className="relative bg-blue-200 shadow-sm ">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-900">
          ERP
        </NavLink>


        {/* Navigation */}
        
        <div className="flex items-center gap-8 text-lg ">
        <NavLink to="/" className="text-blue-900 hover:text-blue-700">Home</NavLink>

          <div className="relative">
            <button
              className="text-orange-500"
              onClick={toggleAppeals} // Toggle onClick
            >
              Appeals ⌄
            </button>

            {appealsOpen && (
              <div className="absolute z-10 mt-4 w-96 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-lg shadow-xl text-black p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Appeals (3P Sellers) */}
                <div>
                  <h4 className="text-blue-900 text-xl font-bold mb-4">Appeals (3P Sellers)</h4>
                  <ul className="space-y-3 text-sm">
                    <li><NavLink to="/accountappeals/amazon" className="hover:underline">Amazon Account Appeal</NavLink></li>
                    <li><NavLink to="/services/amazon-asin-appeal" className="hover:underline">Amazon ASIN Appeal</NavLink></li>
                    <li><NavLink to="/services/brand-registry-appeal" className="hover:underline">Brand Registry Appeal</NavLink></li>
                    <li><NavLink to="/services/account-transition" className="hover:underline">Amazon Account Transition Services</NavLink></li>
                    <li><NavLink to="/services/kdp-appeal" className="hover:underline">Amazon Kindle Direct Publishing Appeal</NavLink></li>
                    <hr />
                    <li><NavLink to="/services/walmart-account-appeal" className="hover:underline">Walmart Account Appeal</NavLink></li>
                    <li><NavLink to="/services/walmart-item-appeal" className="hover:underline">Walmart Item Appeal</NavLink></li>
                  </ul>
                </div>

                {/* Appeals (1P Vendors) */}
                <div>
                  <h4 className="text-blue-900 text-xl font-bold mb-4">Appeals (1P Vendors)</h4>
                  <ul className="space-y-3 text-sm">
                    <li><NavLink to="/1p/amazon-account" className="hover:underline">Amazon Account Appeal</NavLink></li>
                    <li><NavLink to="/1p/amazon-asin" className="hover:underline">Amazon ASIN Appeal</NavLink></li>
                    <li><NavLink to="/1p/brand-registry" className="hover:underline">Brand Registry Appeal</NavLink></li>
                    <hr />
                    <li><NavLink to="/1p/vendor-invoice" className="hover:underline">Vendor Invoice Disputes</NavLink></li>
                    <li><NavLink to="/1p/consulting" className="hover:underline">Vendor Consulting & Problem Solving</NavLink></li>
                  </ul>
                </div>

                {/* Quick Access */}
                <div>
                  <h4 className="text-blue-900 text-xl font-bold mb-4">QUICK ACCESS</h4>
                  <ul className="space-y-3 text-sm">
                    <li><NavLink to="/contact/call" className="hover:underline">Call Us</NavLink></li>
                    <li><NavLink to="/contact/email" className="hover:underline">Contact Us</NavLink></li>
                    <hr />
                    <li><NavLink to="/reviews" className="hover:underline text-green-600 font-semibold">Customer Reviews</NavLink></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="text-blue-900"
              onClick={toggleServices} // Toggle onClick
            >
              Services ⌄
            </button>

            {servicesOpen && (
              <div className="absolute mt-2 w-60 bg-white shadow-lg rounded-lg p-4 z-10">
                <ul className="space-y-2 text-sm text-gray-800">
                  <li><NavLink to="/services/account-management" className="hover:underline">Account Management</NavLink></li>
                  <li><NavLink to="/services/listing-optimization" className="hover:underline">Listing Optimization</NavLink></li>
                  <li><NavLink to="/services/suspension-prevention" className="hover:underline">Suspension Prevention</NavLink></li>
                </ul>
              </div>
            )}
          </div>

          <NavLink to="/about" className="text-blue-900 hover:text-blue-700">About</NavLink>
        </div>

        {/* Contact Button */}
        <div className="flex gap-4">
          {/* <NavLink to="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Contact Us
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
