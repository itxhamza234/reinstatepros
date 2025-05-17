import React from "react";
import { Link } from "react-router-dom";
import "./QuickAccess.css";

const QuickAccess = () => {
  return (
    <div className="quick-access-dropdown">
      <h4>QUICK ACCESS</h4>
      <ul>
        <li><Link to="/call-us">Call Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/customer-reviews">Customer Reviews</Link></li>
      </ul>
    </div>
  );
};

export default QuickAccess;