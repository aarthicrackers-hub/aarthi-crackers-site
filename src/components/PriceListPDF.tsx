import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const PriceListPDF: React.FC = () => {
  const handleViewPDF = () => {
    // Open the existing PDF file in a new tab
    window.open('/AARTHI-CRACKERS-Pricelist.pdf', '_blank');
  };

  return (
    <Button
      onClick={handleViewPDF}
      variant="secondary"
      className="w-full sm:w-auto"
    >
      <FileText className="w-4 h-4 mr-2" />
      View Price List
    </Button>
  );
};
