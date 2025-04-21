import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);

  useEffect(() => {
    document.title = 'Shopping Cart | Clay Collective';
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    setShowCheckoutMessage(true);
    // In a real application, this would redirect to a checkout page
  };

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto mb-6 text-gray-300" />
          <h1 className="font-serif text-3xl text-studio-blue-800 mb-4">Your Cart is Empty</h1>
          <p className="text-studio-blue-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Browse Products
            </Link>
            <Link
              to="/classes"
              className="bg-studio-blue-700 hover:bg-studio-blue-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Explore Classes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-studio-blue-800 mb-8 text-center">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-lg shadow-sm p-4 flex items-center"
              >
                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-studio-blue-800">{item.name}</h3>
                    <span className="font-medium text-terracotta-600">${item.price}</span>
                  </div>

                  {item.type === 'class' && item.date && (
                    <p className="text-sm text-studio-blue-600 mt-1">
                      Session: {item.date}
                    </p>
                  )}

                  <div className="flex justify-between items-center mt-2">
                    {item.type === 'product' ? (
                      <div className="flex items-center border border-gray-200 rounded w-24">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center text-studio-blue-600"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-studio-blue-600"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <div className="text-sm text-studio-blue-500">
                        Workshop Class
                      </div>
                    )}

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-clay-primary-50 rounded-lg p-6">
              <h2 className="font-serif text-xl text-studio-blue-800 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-studio-blue-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-studio-blue-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-studio-blue-600">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-clay-primary-200 pt-3 flex justify-between font-semibold text-studio-blue-800">
                  <span>Estimated Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-md font-medium flex items-center justify-center transition-colors"
              >
                Proceed to Checkout
                <ArrowRight size={18} className="ml-2" />
              </button>

              {showCheckoutMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-white rounded-md text-sm text-studio-blue-600 border border-green-200"
                >
                  This is a demo site. In a real application, you would now be redirected to a secure checkout page.
                </motion.div>
              )}

              <div className="mt-6 text-center">
                <Link
                  to="/shop"
                  className="text-studio-blue-600 hover:text-terracotta-500 text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;