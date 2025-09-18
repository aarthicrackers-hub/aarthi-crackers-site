import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(product);
  };

  // Get category icon based on product category
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'Sparklers': '✨',
      'Ground Chakkar': '🌀',
      'Flower Pots': '🌸',
      'Twinkling Star': '⭐',
      'Fancy Novelties': '🎆',
      'Atom Bomb': '💣',
      'Rockets': '🚀',
      'Single Sound Crackers': '💥',
      'Chorsa & Giant': '🎯',
      'Kids Special': '🎈',
      'Garland': '🏮',
      'Repeating Shot': '🔫',
      'Fountain': '⛲',
      'Glittering': '✨',
      'Color Matches': '🔥',
      'Sound Crackers': '💥',
      'Pipe Items': '🎺',
      'Shots': '🎆'
    };
    return iconMap[category] || '🎆';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
    >
      {/* Product Header with Icon and Category */}
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-3xl">{getCategoryIcon(product.category)}</span>
        </div>
        <div className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full inline-block">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-semibold text-gray-900 mb-3 text-sm leading-tight">
          {product.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary-600">
              ₹{product.rate}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.ratePer}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};
