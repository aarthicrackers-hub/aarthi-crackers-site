import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';

export const PriceListPDF: React.FC = () => {
  const handleDownloadPDF = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/AARTHI-CRACKERS-Pricelist.pdf';
    link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownloadPDF}
      variant="secondary"
      className="w-full sm:w-auto"
    >
      <Download className="w-4 h-4 mr-2" />
      Download Price List
    </Button>
  );
};
