export interface OrderData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  items: Array<{
    name: string;
    rate: number;
    quantity: number;
    total: number;
  }>;
  totalAmount: number;
}

export const sendOrderToEmail = async (orderData: OrderData): Promise<boolean> => {
  try {
    const formData = new FormData();
    
    // Add Web3Forms access key
    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_KEY || (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';
    
    console.log('Using access key:', accessKey.substring(0, 8) + '...'); // Log partial key for debugging
    
    formData.append('access_key', accessKey);
    
    // Add customer details
    formData.append('name', orderData.name);
    formData.append('email', orderData.email);
    formData.append('phone', orderData.phone);
    formData.append('address', orderData.address);
    
    // Format order items
    const orderItemsText = orderData.items
      .map((item, index) => `${index + 1}. ${item.name} - ₹${item.rate} x ${item.quantity} = ₹${item.total}`)
      .join('\n');
    
    const message = `NEW ORDER FROM AARTHI CRACKERS WEBSITE

Customer Details:
Name: ${orderData.name}
Email: ${orderData.email}
Phone: ${orderData.phone}
Address: ${orderData.address}

Order Details:
${orderItemsText}

Total Amount: ₹${orderData.totalAmount}

Additional Message: ${orderData.message || 'No additional message'}

---
Order placed on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
Website: Aarthi Crackers Online Store`;
    
    formData.append('message', message);
    formData.append('subject', `New Order from ${orderData.name} - Aarthi Crackers`);
    
    console.log('Sending order to Web3Forms...');
    
    // Web3Forms endpoint
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    
    console.log('Web3Forms response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Web3Forms error response:', errorText);
      throw new Error(`Web3Forms API error: ${response.status} - ${errorText}`);
    }
    
    const result = await response.json();
    console.log('Web3Forms result:', result);
    
    return result.success;
  } catch (error) {
    console.error('Error sending order:', error);
    return false;
  }
};
