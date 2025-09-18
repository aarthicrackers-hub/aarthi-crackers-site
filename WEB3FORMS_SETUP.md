# Web3Forms Setup Guide

This guide will help you set up Web3Forms to receive order notifications via email.

## Step 1: Create Web3Forms Account

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Sign Up"
3. Create your account using your email address
4. Verify your email address

## Step 2: Get Your Access Key

1. After logging in, you'll see your dashboard
2. Look for "Access Key" or "API Key" section
3. Copy your access key (it looks like: `12345678-1234-1234-1234-123456789abc`)

## Step 3: Configure Your Website

1. Create a `.env` file in your project root (copy from `env.example`)
2. Add your access key:

```env
VITE_WEB3FORMS_KEY=your_actual_access_key_here
```

3. Replace `your_actual_access_key_here` with the key you copied from Web3Forms

## Step 4: Test the Setup

1. Start your development server: `npm run dev`
2. Add some products to cart
3. Click "Place Order"
4. Fill out the customer details form
5. Submit the order
6. Check your email for the order notification

## Step 5: Customize Email Template (Optional)

1. In your Web3Forms dashboard, go to "Settings"
2. Look for "Email Template" or "Form Settings"
3. Customize the email template to match your brand
4. You can add your logo, change colors, etc.

## Troubleshooting

### Order Not Received?
- Check your spam/junk folder
- Verify the access key is correct
- Make sure the `.env` file is in the project root
- Check the browser console for any errors

### Form Not Submitting?
- Ensure all required fields are filled
- Check internet connection
- Verify Web3Forms service is working

## Email Format

When an order is placed, you'll receive an email with:

- Customer details (name, email, phone, address)
- Complete order list with quantities and prices
- Total amount
- Order timestamp
- Any additional message from customer

## Security Notes

- Keep your access key private
- Don't commit the `.env` file to version control
- The access key is safe to use in frontend code (it's designed for this)

## Support

If you need help with Web3Forms:
- Visit their documentation: [https://web3forms.com/docs](https://web3forms.com/docs)
- Contact their support through their website
- Check their FAQ section

---

**Note**: Web3Forms is free for up to 250 submissions per month. For higher volumes, they offer paid plans.
