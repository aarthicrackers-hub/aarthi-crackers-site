import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';

export const PriceListPDF: React.FC = () => {
  // Updated for production deployment - Download functionality
  const handleDownloadPDF = async () => {
    try {
      console.log('Attempting to download PDF...');
      // Try to fetch the PDF file first
      const response = await fetch('/AARTHI-CRACKERS-Pricelist.pdf');
      console.log('PDF fetch response:', response.status, response.statusText);
      
      if (response.ok) {
        // Create blob from response
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        // Create download link with direct download attributes
        const link = document.createElement('a');
        link.href = url;
        link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
        link.style.display = 'none'; // Hide the link
        
        // Add to DOM, click, and remove immediately
        document.body.appendChild(link);
        link.click();
        
        // Clean up immediately
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
        
        console.log('PDF download initiated successfully');
      } else {
        // Fallback to direct link method with forced download
        console.log('Fetch failed, trying direct link method');
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        const link = document.createElement('a');
        link.href = '/AARTHI-CRACKERS-Pricelist.pdf';
        link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Final fallback - try direct download
      const link = document.createElement('a');
      link.href = '/AARTHI-CRACKERS-Pricelist.pdf';
      link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
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
