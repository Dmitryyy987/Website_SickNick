const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

async function parseResponseBody(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  return text ? { message: text } : {};
}

async function requestJson(path, options) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  const payload = await parseResponseBody(response);

  if (!response.ok) {
    const error = new Error(payload?.error || payload?.message || `Request failed with status ${response.status}`);
    error.status = response.status;
    error.details = payload;
    throw error;
  }

  return payload;
}

export const api = {
  sendContactForm: async (formData) => {
    return requestJson("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  },

  subscribeNewsletter: async (email) => {
    return requestJson("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  },
};