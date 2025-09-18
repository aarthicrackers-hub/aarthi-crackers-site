# Aarthi Crackers - Premium Fireworks & Crackers Website

A modern, mobile-responsive static website built with React + Vite + TypeScript + TailwindCSS for Aarthi Crackers, featuring a complete e-commerce experience for fireworks and crackers.

## 🚀 Features

### 🏠 **Home Page**
- Welcome section with animated banner
- "Shop Now" and "View Price List" buttons
- Product categories preview
- Safety notices and company features

### 🛍️ **Shop Page**
- Complete product catalog with 117+ cracker varieties
- Advanced search and filter functionality
- Category-based filtering (Sparklers, Ground Chakkar, Flower Pots, etc.)
- Responsive grid layout with product cards
- Real-time search across all products

### 🛒 **Shopping Cart**
- Add/remove products with quantity controls
- Real-time total calculation
- Animated cart sidebar
- Order placement with success confirmation
- Zustand state management

### 📄 **PDF Price List**
- Auto-generated PDF with complete product catalog
- Professional formatting with company branding
- Categorized product listings
- Safety guidelines included
- Downloadable and opens in new tab

### 📞 **Contact Page**
- Contact form with validation
- Company information and business hours
- Safety notices and guidelines
- Responsive design

## 🛠️ **Tech Stack**

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router DOM
- **PDF Generation**: jsPDF
- **Icons**: Lucide React
- **UI Components**: Custom shadcn/ui inspired components

## 📦 **Installation & Setup**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aarthi-crackers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   Update the `.env` file with your actual values:
   - Web3Forms API key for order submissions (see `WEB3FORMS_SETUP.md`)
   - Contact information

4. **Web3Forms Setup** (for order notifications)
   - Follow the detailed guide in `WEB3FORMS_SETUP.md`
   - Get your access key from [web3forms.com](https://web3forms.com)
   - Add the key to your `.env` file

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 **Design Features**

### **Image-Free Design**
- No external image dependencies
- Category-specific emoji icons for products
- Color-coded gradient backgrounds
- Clean, modern aesthetic without image loading issues

### **Mobile-First Responsive Design**
- Optimized for all screen sizes
- Touch-friendly interface
- Collapsible navigation on mobile
- Responsive grid layouts

### **Modern UI/UX**
- Clean, professional design
- Consistent color scheme (Red/Orange theme)
- Smooth animations and transitions
- Intuitive navigation

### **Accessibility**
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 📱 **Pages Overview**

### **Home Page (`/`)**
- Hero section with call-to-action buttons
- Feature highlights (Safety, Quality, Delivery)
- Product categories preview
- Safety notices

### **Shop Page (`/shop`)**
- Product grid with search and filters
- Category sidebar (desktop) / mobile drawer
- Product cards with add-to-cart functionality
- Real-time search and filtering

### **Contact Page (`/contact`)**
- Contact form with validation
- Company information
- Business hours and location
- Safety guidelines

## 🛒 **Shopping Features**

### **Product Management**
- 117+ products across 18 categories
- Detailed product information
- Rate per box/packet display
- Category-based organization

### **Cart Functionality**
- Add/remove products
- Quantity adjustment
- Real-time total calculation
- Customer details form for orders
- Email notifications to business owner
- Order placement with validation

### **Order System**
- Customer details form (name, email, phone, address)
- Form validation and error handling
- Order summary display
- Email notifications via Web3Forms
- Success confirmation modal
- Automatic cart clearing after order

### **PDF Generation**
- Complete product catalog
- Professional formatting
- Company branding
- Safety guidelines

## 🔧 **Customization**

### **Adding Products**
Edit `src/data/products.ts` to add new products:
```typescript
{
  id: 118,
  name: "New Product Name",
  rate: 500,
  ratePer: "1 BOX",
  category: "Category Name"
}
```

### **Logo Integration**
The application includes a company logo:
- Logo file: `public/logo.png`
- Displays in navbar and footer
- Automatic fallback to emoji icon if logo fails to load
- Responsive design with proper sizing

### **Image-Free Product Design**
The application uses emoji icons and gradient backgrounds for products:
- Each product category has a unique emoji icon
- Color-coded backgrounds for visual distinction
- No external image dependencies or loading issues
- Easy to customize by modifying the `getCategoryIcon` function in `ProductCard.tsx`

### **Styling**
- Colors: Edit `tailwind.config.js`
- Components: Modify files in `src/components/ui/`
- Global styles: Update `src/index.css`

### **Contact Information**
Update contact details in:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`
- Environment variables

## 🚨 **Safety Features**

- Prominent safety notices throughout the site
- Safety guidelines in PDF generation
- Warning messages in footer
- Safety-first messaging in hero section

## 📊 **Performance**

- Optimized bundle size with Vite
- Lazy loading for better performance
- Responsive images and icons
- Efficient state management

## 🌐 **Browser Support**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 **License**

This project is created for Aarthi Crackers. All rights reserved.

## 🤝 **Support**

For any questions or support, please contact:
- Email: aarthicrackers@gmail.com
- Phone: +91-9488162475 / +91-9443396475
- Address: 2/552/G2, Sivakasi-Sattur Main Road, Mettamalai, Sivakasi

---

**⚠️ Safety Notice**: Always follow safety guidelines while handling fireworks. Keep away from children, use in open areas only, and read instructions before use.
