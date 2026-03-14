const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

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