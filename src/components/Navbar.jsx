import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const [appealsOpen, setAppealsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleAppeals = () => {
    setAppealsOpen(!appealsOpen);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setAppealsOpen(false);
  };

  const handleAddToCart = (service) => {
    console.log("Added to cart:", service);
  };

  const suspensionTypes = [
    { name: "1st Time Dropshipping Appeal", charge: "$300" },
    { name: "FBM & Seller Fulfill Offers Appeal", charge: "$300" },
    { name: "ODR Suspension", charge: "$300" },
    { name: "LSR Suspension", charge: "$300" },
    { name: "VTR Suspension", charge: "$300" },
    { name: "OTDR Suspension", charge: "$300" },
    { name: "Listing Violation", charge: "$400" },
    { name: "IP Violation", charge: "$400" },
    { name: "Intellectual Property Counterfeit Account Deactivation", charge: "$1500" },
    { name: "Intellectual Property Copyright Account Deactivation", charge: "$1200" },
    { name: "Intellectual Property Trademark Account Deactivation", charge: "$1800" },
    { name: "Intellectual Property Patent Account Deactivation", charge: "$2000" },
    { name: "Section 3, Identity Verification UK and USA", charge: "$300" },
    { name: "Section 3, Inauthentic Product Complaint", charge: "$3000" },
    { name: "Product Inauthenticity", charge: "$3000" },
    { name: "Section 3, Counterfeit and Identity Verification", charge: "$3500" },
    { name: "Linked or Multiple Account Suspension", charge: "$1500" },
    { name: "Seller Code of Conduct & Dropshipping Violation UK", charge: "£3000" },
    { name: "Seller Code of Conduct & Shipping Template Abuse Violation UK", charge: "£3000" },
    { name: "Seller Code of Conduct & Alter Shipping Charges During Checkouts Violation UK", charge: "£3000" },
    { name: "Seller Code of Conduct & Fluctuating Shipping Charges Violation UK", charge: "£3000" },
    { name: "Sale Velocity Review", charge: "$600" },
    { name: "Sale Velocity Review Deactivation", charge: "$1200" },
    { name: "Fake Reviews Suspension", charge: "$1200" },
    { name: "Forged and Manipulation Suspension", charge: "$2500" },
  ];

  return (
    <header className="bg-gradient-to-r bg-blue-900 via-blue-900 to-blue-900 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-extrabold tracking-wide text-white hover:text-yellow-300 transition-all duration-200">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">ERP</span>
        </NavLink>

        {/* Links */}
        <ul className="flex items-center gap-6 text-white font-medium text-lg">
          <NavLink to="/" className="hover:text-yellow-300 transition">Home</NavLink>

          {/* Appeals Dropdown */}
          <li className="relative">
            <button onClick={toggleAppeals} className="hover:text-yellow-300 transition focus:outline-none">
              Appeals ⌄
            </button>
            {appealsOpen && (
              <div className="absolute z-20 mt-2 w-[600px] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-4">
                <h4 className="text-blue-900 text-lg font-semibold mb-3">Amazon Suspensions</h4>
                <ul className="space-y-2 text-sm max-h-96 overflow-y-auto text-gray-900">
                  {suspensionTypes.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={`/appeals/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-blue-700"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button onClick={toggleServices} className="hover:text-yellow-300 transition focus:outline-none">
              Services ⌄
            </button>
            {servicesOpen && (
              <div className="absolute z-20 mt-2 w-[700px] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-4">
                <h4 className="text-blue-900 text-lg font-semibold mb-3">Amazon Services</h4>
                <ul className="space-y-3 text-sm max-h-96 overflow-y-auto">
                  {suspensionTypes.map((item, index) => (
                    <li key={index} className="flex justify-between items-center gap-4">
                      <NavLink
                        to={`/services/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex-1 hover:text-blue-700"
                      >
                        {item.name}
                      </NavLink>
                      <span className="font-bold text-green-600">{item.charge}</span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 rounded-md flex items-center gap-1"
                      >
                        <FaShoppingCart /> Add
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <NavLink to="/consulting" className="hover:text-yellow-300 transition">Consulting</NavLink>
          <NavLink to="/contact-us" className="hover:text-yellow-300 transition">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
