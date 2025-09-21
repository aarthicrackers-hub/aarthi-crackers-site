import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Shield, Award, Truck } from 'lucide-react';
import { PriceListPDF } from '../components/PriceListPDF';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Aarthi Crackers
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Your trustedd partner for premium fireworks and crackers. 
                Celebrating festivals with safety, joy, and spectacular displays.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/shop">
                <Button size="lg" className="w-full sm:w-auto">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </Button>
              </Link>
              <PriceListPDF />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Aarthi Crackers?
            </h2>
            <p className="text-lg text-gray-600">
              We bring you the finest quality fireworks with unmatched safety standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safety First",
                description: "All our products meet the highest safety standards and come with proper safety instructions."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Premium Quality",
                description: "We source only the finest quality crackers and fireworks from trusted manufacturers."
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "Quick and safe delivery to your doorstep with proper handling and packaging."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600">
              From sparklers to spectacular displays, we have everything for your celebrations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Sparklers", icon: "✨", count: "25+ varieties", color: "from-red-100 to-red-200" },
              { name: "Ground Chakkar", icon: "🌀", count: "6 types", color: "from-orange-100 to-orange-200" },
              { name: "Flower Pots", icon: "🌸", count: "8 varieties", color: "from-pink-100 to-pink-200" },
              { name: "Kids Special", icon: "🎈", count: "16 items", color: "from-blue-100 to-blue-200" },
              { name: "Sound Crackers", icon: "💥", count: "12 types", color: "from-yellow-100 to-yellow-200" },
              { name: "Fancy Novelties", icon: "🎆", count: "16 varieties", color: "from-purple-100 to-purple-200" },
              { name: "Atom Bomb", icon: "💣", count: "5 types", color: "from-gray-100 to-gray-200" },
              { name: "Garland", icon: "🏮", count: "6 varieties", color: "from-green-100 to-green-200" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-12 bg-red-50 border-t border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">Safety First</h3>
            </div>
            <p className="text-red-700 max-w-4xl mx-auto">
              Always follow safety guidelines while handling fireworks. Keep away from children, 
              use in open areas only, and read instructions before use. Celebrate responsibly!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
