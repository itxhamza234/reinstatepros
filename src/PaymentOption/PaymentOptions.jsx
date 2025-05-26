import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const PaymentOptions = () => {
  const [method, setMethod] = useState('payoneer');
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const location = useLocation();
  const { dollarTotal = 0, poundTotal = 0 } = location.state || {};


  const amountMessage = [
    dollarTotal > 0 ? `Amount in USD: $${dollarTotal.toFixed(2)}` : '',
    poundTotal > 0 ? `Amount in GBP: £${poundTotal.toFixed(2)}` : '',
  ]
    .filter(Boolean)
    .join('\n');
  
  const whatsappUrl = `https://wa.me/923077971099?text=${encodeURIComponent(
    `Payment Confirmation (${method.toUpperCase()})\n\n` +
    `I have completed the payment via ${method}.\n` +
    `Payment Method: ${
      method === 'payoneer' ? 'Payoneer Bank Transfer' : 'Wise Bank Transfer'
    }\n` +
    `${amountMessage}\n` +
    `Transaction Reference: [Please provide reference/ID and Screenshot]`
  )}`;
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl sm:rounded-2xl overflow-hidden"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-10 px-6 pt-6 pb-4 border-b">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl font-bold text-center text-blue-700"
          >
            Choose Your Payment Method
          </motion.h2>
          
          <div className="flex justify-center mt-4 space-x-2 sm:space-x-4">
            <button
              onClick={() => {
                setMethod('payoneer');
                setPaymentCompleted(false);
              }}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm ${
                method === 'payoneer'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Payoneer
            </button>
            <button
              onClick={() => {
                setMethod('wise');
                setPaymentCompleted(false);
              }}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm ${
                method === 'wise'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wise
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {/* Payoneer Section */}
          {method === 'payoneer' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100 space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700">Payoneer Bank Transfer</h3>

              <div className="bg-white p-3 sm:p-4 rounded-lg border border-blue-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm sm:text-base">
                  <div>
                    <p className="font-semibold text-blue-700">Bank Name:</p>
                    <p>Citibank</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Bank Address:</p>
                    <p>111 Wall Street New York, NY 10043 USA</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Routing (ABA):</p>
                    <p>031100209</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">SWIFT Code:</p>
                    <p>CITIUS33</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Account Number:</p>
                    <p>70580460000350883</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Account Type:</p>
                    <p>CHECKING</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-semibold text-blue-700">Beneficiary Name:</p>
                    <p>FAISAL ATTAULLAH</p>
                  </div>
                </div>
              </div>
              <p className="text-blue-700">Total Amount: ${dollarTotal.toFixed(2)}</p>
              <p className="text-green-700">Total Amount: £{poundTotal.toFixed(2)}</p>
              <button
                onClick={() => setPaymentCompleted(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg transition-colors duration-300 shadow-md"
              >
                
                I've Completed the Payment
              </button>
            </motion.div>
          )}

          {/* Wise Section */}
          {method === 'wise' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-100 space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-green-700">Wise Bank Transfer</h3>

              <div className="bg-white p-3 sm:p-4 rounded-lg border border-green-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm sm:text-base">
                  <div>
                    <p className="font-semibold text-green-700">Bank Name:</p>
                    <p>Community Federal Savings Bank</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Account Name:</p>
                    <p>Global Trading Mart Ltd</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Account Type:</p>
                    <p>Checking</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Account Number:</p>
                    <p>8313693056</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Routing Number:</p>
                    <p>026073150 (ACH)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">SWIFT/BIC:</p>
                    <p>CMFGUS33</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-semibold text-green-700">Bank Address:</p>
                    <p>89-16 Jamaica Ave, Woodhaven, NY 11421</p>
                  </div>
                </div>
              </div>
              <div className="text-sm sm:text-base font-semibold text-gray-800">
  <p className="text-blue-700">Total Amount: ${dollarTotal.toFixed(2)}</p>
  <p className="text-green-700">Total Amount: £{poundTotal.toFixed(2)}</p>
</div>

              <button
                onClick={() => setPaymentCompleted(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg transition-colors duration-300 shadow-md"
              >
                I've Completed the Payment
              </button>
            </motion.div>
          )}

          {/* Payment Confirmation */}
          {paymentCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6 p-4 sm:p-6 bg-white border-2 border-green-300 rounded-lg shadow-inner"
            >
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">Payment Completed!</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Please send payment proof via WhatsApp to confirm your transaction.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#25D366] hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300 w-full max-w-xs mx-auto"
                >
                  <FaWhatsapp className="mr-2 text-lg" /> 
                  <span>Send Proof via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentOptions;