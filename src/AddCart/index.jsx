// src/AddCart/index.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../AddCart/CartContext";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const AddCart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    let dollarTotal = 0;
    let poundTotal = 0;

    cartItems.forEach((item) => {
      if (item.charge.includes("$")) {
        const value = parseFloat(item.charge.replace(/[^0-9.]/g, ""));
        dollarTotal += isNaN(value) ? 0 : value;
      } else if (item.charge.includes("£")) {
        const value = parseFloat(item.charge.replace(/[^0-9.]/g, ""));
        poundTotal += isNaN(value) ? 0 : value;
      }
    });

    return { dollarTotal, poundTotal };
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const { dollarTotal, poundTotal } = calculateTotal();
    navigate("/Payment-Options", {
      state: { dollarTotal, poundTotal },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-900 min-h-screen py-12 px-4 sm:px-6 lg:px-16 text-white"
    >
      {/* Floating Cart Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
        >
          <FaShoppingCart className="text-xl" />
          {cartItems.length}
        </button>
      </div>

      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 border-b border-white/20 pb-4 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🛒 Your Shopping Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white text-gray-800 p-6 rounded-lg shadow-md text-center text-lg"
        >
          Your cart is empty. Add some services to get started!
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-white text-gray-900 p-6 rounded-lg shadow-md"
          >
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex justify-between items-center py-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-green-600 font-bold">{item.charge}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white to-gray-100 text-gray-900 p-6 rounded-2xl shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">
              🧾 Order Summary
            </h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-700">
                <span className="font-medium">Items in Cart:</span>
                <span className="font-semibold">{cartItems.length}</span>
              </div>

              {(() => {
                const { dollarTotal, poundTotal } = calculateTotal();
                return (
                  <>
                    <div className="flex justify-between text-green-700 font-semibold">
                      <span>Total (USD):</span>
                      <span>${dollarTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-blue-700 font-semibold">
                      <span>Total (GBP):</span>
                      <span>£{poundTotal.toFixed(2)}</span>
                    </div>
                  </>
                );
              })()}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={clearCart}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg text-sm font-bold transition duration-300"
            >
              <FaTrashAlt /> Clear Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleCheckout}
              className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg text-sm font-bold transition duration-300"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AddCart;
