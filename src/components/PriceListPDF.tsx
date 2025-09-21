import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';

export const PriceListPDF: React.FC = () => {
  // Updated for production deployment - Download functionality
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
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
        
        if (isMobile) {
          // For mobile devices, open in new tab first, then try download
          console.log('Mobile device detected, opening PDF in new tab');
          const newWindow = window.open(url, '_blank');
          
          // Show a brief message to user
          if (newWindow) {
            console.log('PDF opened in new tab for mobile user');
          } else {
            console.log('Popup blocked, trying alternative method');
            // If popup is blocked, try direct link
            window.location.href = url;
          }
          
          // Also try to trigger download
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = url;
            link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, 500);
          
          // Clean up after a delay
          setTimeout(() => {
            window.URL.revokeObjectURL(url);
          }, 2000);
        } else {
          // For desktop, use direct download
          const link = document.createElement('a');
          link.href = url;
          link.download = 'AARTHI-CRACKERS-Pricelist.pdf';
          link.style.display = 'none';
          
          document.body.appendChild(link);
          link.click();
          
          setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          }, 100);
        }
        
        console.log('PDF download initiated successfully');
      } else {
        // Fallback to direct link method with forced download
        console.log('Fetch failed, trying direct link method');
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (isMobile) {
          // For mobile, open in new tab
          window.open('/AARTHI-CRACKERS-Pricelist.pdf', '_blank');
        } else {
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
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Final fallback - open in new tab for mobile, direct download for desktop
      if (isMobile) {
        window.open('/AARTHI-CRACKERS-Pricelist.pdf', '_blank');
      } else {
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
    }
  };

  return (
    <Button
      onClick={handleDownloadPDF}
      variant="secondary"
      className="w-full sm:w-auto"
    >
      <Download className="w-4 h-4 mr-2" />
      {isMobile ? 'View Price List' : 'Download Price List'}
    </Button>
  );
};
