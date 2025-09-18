// Test Web3Forms integration
export const testWeb3Forms = async () => {
  const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_KEY || (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;
  
  console.log('Environment variables:');
  console.log('VITE_WEB3FORMS_KEY:', (import.meta as any).env?.VITE_WEB3FORMS_KEY);
  console.log('VITE_WEB3FORMS_ACCESS_KEY:', (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY);
  console.log('Using access key:', accessKey ? accessKey.substring(0, 8) + '...' : 'NOT FOUND');
  
  if (!accessKey) {
    console.error('No Web3Forms access key found!');
    return false;
  }
  
  try {
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');
    formData.append('subject', 'Test Order from Aarthi Crackers');
    formData.append('message', 'This is a test message to verify Web3Forms integration.');
    
    console.log('Sending test message to Web3Forms...');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return false;
    }
    
    const result = await response.json();
    console.log('Success response:', result);
    return result.success;
    
  } catch (error) {
    console.error('Test failed:', error);
    return false;
  }
};
