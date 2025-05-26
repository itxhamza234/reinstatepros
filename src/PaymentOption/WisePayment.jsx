// pages/WisePayment.jsx
import React from "react";

const WisePayment = () => {
  return (
    <div className="max-w-xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Payment Options</h2>

      <div>
        <p>Please transfer the total amount to the following bank details:</p>
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <p><strong>Bank Name:</strong> Community Federal Savings Bank</p>
          <p><strong>Account Name:</strong> Global Trading Mart Ltd</p>
          <p><strong>Account Number:</strong> 8313693056</p>
          <p><strong>Account Type:</strong> Checking (Domestic transfers only)</p>
          <p><strong>Routing Number (Wire & ACH):</strong> 026073150</p>
          <p><strong>SWIFT/BIC (International):</strong> CMFGUS33</p>
          <p><strong>Bank Address:</strong> 89-16 Jamaica Ave, Woodhaven, NY, 11421</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://wa.me/YOUR_NUMBER?text=Hi,%20I%20have%20completed%20the%20payment.%20Here%20is%20the%20proof:"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25d366] text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Payment Proof via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WisePayment;
