import React, { useState, useEffect } from 'react';

export const Logo: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/logo.png');

  useEffect(() => {
    // Add cache busting parameter
    setLogoSrc(`/logo.png?t=${Date.now()}`);
  }, []);

  if (logoError) {
    return (
      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-lg">🎆</span>
      </div>
    );
  }

  return (
    <img 
      src={logoSrc}
      alt="Aarthi Crackers Logo" 
      className="w-8 h-8 object-contain"
      onError={() => {
        console.log('Logo failed to load, using fallback');
        setLogoError(true);
      }}
      onLoad={() => {
        console.log('Logo loaded successfully');
      }}
    />
  );
};
