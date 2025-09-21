import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';

export const PriceListPDF: React.FC = () => {
  // Updated for production deployment - Download functionality
  const handleDownloadPDF = async () => {
    try {
      // Try to fetch the PDF file first
      const response = await fetch('/AARTHI-CRACKERS-Pricelist.pdf');
      
      if (response.ok) {
        // Create blob from response
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        // Create download link
        const link = document.createElement('a');
        link.href = url;
        link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the URL object
        window.URL.revokeObjectURL(url);
      } else {
        // Fallback to direct link method
        console.log('Fetch failed, trying direct link method');
        const link = document.createElement('a');
        link.href = '/AARTHI-CRACKERS-Pricelist.pdf';
        link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Final fallback - open in new tab
      window.open('/AARTHI-CRACKERS-Pricelist.pdf', '_blank');
    }
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
