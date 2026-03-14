const API_BASE_URL = "https://website-sicknick-backend.onrender.com";

export const api = {
  sendContactForm: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  },
};