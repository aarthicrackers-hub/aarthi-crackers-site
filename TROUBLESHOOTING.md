# Troubleshooting Guide

## Web3Forms Integration Issues

### Common Error: 400 Bad Request

If you're getting a 400 error from `api.web3forms.com/submit`, here are the most common causes and solutions:

#### 1. **Invalid Access Key**
- **Problem**: The access key is incorrect or expired
- **Solution**: 
  - Go to [web3forms.com](https://web3forms.com)
  - Log in to your account
  - Copy the correct access key
  - Update your `.env` file with the correct key

#### 2. **Wrong Environment Variable Name**
- **Problem**: Using wrong variable name in `.env`
- **Solution**: Make sure your `.env` file has:
  ```env
  VITE_WEB3FORMS_KEY=your_actual_access_key_here
  ```

#### 3. **Missing Required Fields**
- **Problem**: Web3Forms requires certain fields
- **Solution**: The code automatically includes all required fields

#### 4. **CORS Issues**
- **Problem**: Browser blocking the request
- **Solution**: This is handled by Web3Forms, but try:
  - Clear browser cache
  - Try in incognito mode
  - Check if ad blockers are interfering

### Testing Your Setup

1. **Use the Test Button**:
   - Go to the Contact page
   - Click "Test Web3Forms Integration"
   - Check the browser console for detailed logs

2. **Check Console Logs**:
   - Open browser developer tools (F12)
   - Look for console messages when testing
   - The logs will show exactly what's being sent

3. **Verify Environment Variables**:
   - Check that your `.env` file is in the project root
   - Restart the development server after changing `.env`
   - The test will show which access key is being used

### Debug Information

The test function will log:
- Environment variables being used
- Access key (partially hidden for security)
- Request details
- Response status and content

### Common Solutions

#### If the test fails:
1. **Double-check your access key** from Web3Forms dashboard
2. **Restart your development server** after updating `.env`
3. **Check your Web3Forms account** for any restrictions
4. **Try a different browser** to rule out browser issues

#### If the test succeeds but orders don't work:
1. **Check the order form validation** - all fields must be filled
2. **Verify the customer details modal** is working
3. **Check the console** for any JavaScript errors

### Getting Help

If you're still having issues:
1. Check the browser console for detailed error messages
2. Verify your Web3Forms account is active
3. Try the test button on the Contact page
4. Check the Web3Forms documentation: [web3forms.com/docs](https://web3forms.com/docs)

### Environment File Example

Make sure your `.env` file looks like this:
```env
VITE_WEB3FORMS_KEY=686552dc-a1c0-4b39-bb30-92b284f0f816
```

**Note**: Don't include quotes around the access key value.
