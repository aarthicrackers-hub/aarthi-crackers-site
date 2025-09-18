import jsPDF from 'jspdf';
import { Product } from '../data/products';

export const generatePriceListPDF = (products: Product[]) => {
  const doc = new jsPDF();
  
  // Set up colors
  const primaryColor = '#dc2626'; // Red
  const secondaryColor = '#f59e0b'; // Orange
  
  // Header
  doc.setFillColor(primaryColor);
  doc.rect(0, 0, 210, 30, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('AARTHI CRACKERS', 105, 15, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('Premium Fireworks & Crackers', 105, 22, { align: 'center' });
  doc.text('Contact: +91-9488162475, +91-9443396475 | Email: aarthicrackers@gmail.com', 105, 27, { align: 'center' });
  doc.text('Address: 2/552/G2, Sivakasi-Sattur Main Road, Mettamalai, Sivakasi', 105, 32, { align: 'center' });
  
  // Reset text color
  doc.setTextColor(0, 0, 0);
  
  let yPosition = 40;
  
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
  
  // Generate PDF content
  Object.entries(groupedProducts).forEach(([category, categoryProducts]) => {
    // Category header
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFillColor(secondaryColor);
    doc.rect(10, yPosition - 5, 190, 8, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(category.toUpperCase(), 15, yPosition + 2);
    
    yPosition += 15;
    
    // Table header
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    
    doc.text('S.No', 15, yPosition);
    doc.text('Product Name', 30, yPosition);
    doc.text('Rate (₹)', 140, yPosition);
    doc.text('Per', 160, yPosition);
    
    // Draw line under header
    doc.setDrawColor(0, 0, 0);
    doc.line(10, yPosition + 2, 200, yPosition + 2);
    
    yPosition += 8;
    
    // Products in category
    categoryProducts.forEach((product, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      
      // Serial number
      doc.text((index + 1).toString(), 15, yPosition);
      
      // Product name (with word wrapping)
      const productName = product.name;
      const maxWidth = 100;
      const lines = doc.splitTextToSize(productName, maxWidth);
      
      if (Array.isArray(lines)) {
        doc.text(lines[0], 30, yPosition);
        if (lines.length > 1) {
          yPosition += 4;
          doc.text(lines[1], 30, yPosition);
        }
      } else {
        doc.text(productName, 30, yPosition);
      }
      
      // Rate
      doc.text(product.rate.toString(), 140, yPosition);
      
      // Per
      doc.text(product.ratePer, 160, yPosition);
      
      yPosition += 6;
    });
    
    yPosition += 10;
  });
  
  // Footer
  const pageCount = (doc as any).getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    
    // Footer line
    doc.setDrawColor(primaryColor);
    doc.line(10, 285, 200, 285);
    
    // Page number
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
    
    // Safety notice
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
    doc.text('⚠️ SAFETY FIRST: Always follow safety guidelines while handling fireworks', 105, 295, { align: 'center' });
    doc.text('Keep away from children. Use in open areas only. Read instructions before use.', 105, 300, { align: 'center' });
  }
  
  // Save the PDF
  doc.save('Aarthi-Crackers-Price-List.pdf');
};
