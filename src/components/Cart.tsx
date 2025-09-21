import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/Button';
import { SuccessModal } from './SuccessModal';
import { CustomerDetailsModal } from './CustomerDetailsModal';

export const Cart: React.FC = () => {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    updateQuantity, 
    removeItem, 
    getTotalPrice 
  } = useCartStore();
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCustomerDetailsModal, setShowCustomerDetailsModal] = useState(false);

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    setShowCustomerDetailsModal(true);
  };

  const handleOrderPlaced = () => {
    setShowSuccessModal(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={toggleCart}
            />
            
            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shopping Cart ({items.length})
                </h2>
                <button
                  onClick={toggleCart}
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400">Add some products to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        {/* Product Icon */}
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🎆</span>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm text-gray-900 truncate">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">{item.ratePer}</p>
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-primary-600">
                              ₹{item.rate}
                            </p>
                            {item.oldRate && (
                              <p className="text-xs text-gray-400 line-through">
                                ₹{item.oldRate}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 text-red-500 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  {/* Savings Summary */}
                  {items.some(item => item.oldRate) && (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-700">You Save:</span>
                        <span className="text-green-600 font-semibold">
                          ₹{items.reduce((total, item) => 
                            total + (item.oldRate ? (item.oldRate - item.rate) * item.quantity : 0), 0
                          )}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-primary-600">₹{getTotalPrice()}</span>
                  </div>

                  {/* Place Order Button */}
                  <Button
                    onClick={handlePlaceOrder}
                    className="w-full"
                    size="lg"
                  >
                    Place Order
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Customer Details Modal */}
      <CustomerDetailsModal
        isOpen={showCustomerDetailsModal}
        onClose={() => setShowCustomerDetailsModal(false)}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
};
