// Central API base URL for local development and hosted deployment.
const configuredBase = import.meta.env.VITE_API_URL;

export const API_BASE_URL = (
  configuredBase || (import.meta.env.DEV ? "http://localhost:5000" : "")
).replace(/\/+$/, "");

export const API_AUTH_URL = `${API_BASE_URL}/api/auth`;
