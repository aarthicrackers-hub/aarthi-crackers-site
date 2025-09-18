import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Award, Truck } from 'lucide-react';
import { getWorkingLogoSource } from '../utils/logoUtils';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  const [logoSource, setLogoSource] = useState('/logo.png');

  // Try to find a working logo source on component mount
  useEffect(() => {
    getWorkingLogoSource().then((source) => {
      if (source) {
        setLogoSource(source);
        setLogoError(false);
      } else {
        setLogoError(true);
      }
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                  {!logoError ? (
                    <img 
                      src={logoSource} 
                      alt="Aarthi Crackers Logo" 
                      className="w-8 h-8 object-contain"
                      onError={() => {
                        console.log('Footer logo failed to load, using fallback');
                        setLogoError(true);
                      }}
                      onLoad={() => {
                        console.log('Footer logo loaded successfully');
                      }}
                    />
                  ) : (
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
              )}
              <span className="text-xl font-bold">Aarthi Crackers</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for premium fireworks and crackers. 
              Celebrating festivals with safety and joy since years.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/shop" className="block text-gray-300 hover:text-white transition-colors">
                Shop Now
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-300">Sparklers</div>
              <div className="text-gray-300">Ground Chakkar</div>
              <div className="text-gray-300">Flower Pots</div>
              <div className="text-gray-300">Kids Special</div>
              <div className="text-gray-300">Sound Crackers</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <div className="text-gray-300 text-sm">
                  <div>+91-9488162475</div>
                  <div>+91-9443396475</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">aarthicrackers@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <div className="text-gray-300 text-sm">
                  <div>2/552/G2, Sivakasi-Sattur Main Road</div>
                  <div>Mettamalai, Sivakasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Aarthi Crackers. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center">
              <div className="mb-2">⚠️ Safety First - Always follow safety guidelines</div>
              <div>Keep away from children • Use in open areas only • Read instructions before use</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
