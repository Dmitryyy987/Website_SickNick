// src/services/api.js
const API_BASE_URL = 'https://website-sicknick-backend.onrender.com';

export const api = {
  // Contact form endpoint
  sendContactForm: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
  
  // Add more API methods as needed
  // getPortfolioItems: async () => {...}
  // getServices: async () => {...}
};