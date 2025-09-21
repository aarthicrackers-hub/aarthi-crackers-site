import React, { useState } from 'react';

export const Logo: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  if (logoError) {
    return (
      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">A</span>
      </div>
    );
  }

  return (
    <img 
      src="/logo.png?v=1" 
      alt="Aarthi Crackers Logo" 
      className="w-8 h-8 object-contain"
      loading="eager"
      onError={(e) => {
        console.log('Logo failed to load:', e);
        setLogoError(true);
      }}
      onLoad={() => {
        console.log('Logo loaded successfully');
      }}
    />
  );
};
