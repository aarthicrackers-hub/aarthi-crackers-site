import React from 'react';
import { FileText } from 'lucide-react';
import { generatePriceListPDF } from '../utils/pdfGenerator';
import { products } from '../data/products';
import { Button } from './ui/Button';

export const PriceListPDF: React.FC = () => {
  const handleGeneratePDF = () => {
    generatePriceListPDF(products);
  };

  return (
    <Button
      onClick={handleGeneratePDF}
      variant="secondary"
      className="w-full sm:w-auto"
    >
      <FileText className="w-4 h-4 mr-2" />
      View Price List
    </Button>
  );
};
