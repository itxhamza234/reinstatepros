import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../AddCart/CartContext";

const NavBar = () => {
  const [dropdown, setDropdown] = useState({ appeals: false, services: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = { appeals: useRef(null), services: useRef(null), mobile: useRef(null) };

  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (service) => {
    addToCart(service);
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      Object.keys(dropdownRefs).forEach((key) => {
        if (dropdownRefs[key].current && !dropdownRefs[key].current.contains(e.target)) {
          if (key === "mobile") setMobileMenuOpen(false);
          else setDropdown((prev) => ({ ...prev, [key]: false }));
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key) => {
    setDropdown((prev) => {
      const newState = { appeals: false, services: false };
      newState[key] = !prev[key];
      return newState;
    });
  };

  const renderDropdown = (key, title, onClose) => (
    <div
      onMouseLeave={onClose}
      className="absolute z-20 mt-2 w-[90vw] sm:w-[450px] md:w-[600px] lg:w-[700px] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-4"
    >
      <h4 className="text-blue-900 text-lg font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-sm max-h-[60vh] overflow-y-auto text-gray-900">
        {suspensionTypes.map((item, i) => (
          <li key={i} className="flex justify-between items-center">
            <button
              className="flex-1 text-left hover:text-blue-700 transition py-1"
              onClick={() => {
                handleAddToCart(item);
                onClose();
              }}
            >
              {item.name}
            </button>
            <span className="font-bold text-green-600 whitespace-nowrap ml-2">{item.charge}</span>
            <button
              onClick={() => handleAddToCart(item)}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded-md flex items-center gap-1"
            >
              <FaShoppingCart size={12} /> Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-yellow-300 transition">Home</NavLink>
      <li className="relative" ref={dropdownRefs.appeals}>
        <button onClick={() => toggleDropdown("appeals")} className="hover:text-yellow-300 transition flex items-center gap-1">
          Appeals <span>{dropdown.appeals ? "⌃" : "⌄"}</span>
        </button>
        {dropdown.appeals && renderDropdown("appeals", "Amazon Suspensions", () => setDropdown({ appeals: false, services: false }))}
      </li>
      <li className="relative" ref={dropdownRefs.services}>
        <button onClick={() => toggleDropdown("services")} className="hover:text-yellow-300 transition flex items-center gap-1">
          Services <span>{dropdown.services ? "⌃" : "⌄"}</span>
        </button>
        {dropdown.services && renderDropdown("services", "Amazon Services", () => setDropdown({ appeals: false, services: false }))}
      </li>
      <NavLink to="/consulting" className="hover:text-yellow-300 transition">Consulting</NavLink>
      <NavLink to="/contact-us" className="hover:text-yellow-300 transition">Contact</NavLink>
      {cartItems.length > 0 && (
        <li className="relative">
          <NavLink to="/addcart" className="relative hover:text-yellow-300 transition text-xl">
            <FaShoppingCart className="text-yellow-400" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="bg-blue-900 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <NavLink to="/" className="text-2xl sm:text-3xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">ERP</span>
          </NavLink>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-white font-medium text-base lg:text-lg">
          {navLinks}
        </ul>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div ref={dropdownRefs.mobile} className="md:hidden absolute top-full left-0 right-0 bg-blue-900 shadow-lg z-40 p-4">
            <ul className="flex flex-col gap-4 text-white">
              {navLinks}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;