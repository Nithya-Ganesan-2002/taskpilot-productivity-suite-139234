import { useCallback } from "react";

/**
 * PUBLIC_INTERFACE
 * Hook to make API calls with proper authentication headers.
 * @param {String} endpoint - REST endpoint
 * @param {Object} options - fetch options
 */
export function useApi() {
  // Typically you'd grab an access token from context/localStorage
  // const { token } = useContext(AuthContext);

  // PUBLIC_INTERFACE
  const apiCall = useCallback(
    async (endpoint, options = {}) => {
      // Replace with real token from auth flow
      const token = localStorage.getItem("access_token");
      try {
        const res = await fetch(endpoint, {
          ...options,
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined,
            ...options.headers,
          },
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return await res.json();
      } catch (e) {
        // In production: use error boundary/notification
        throw e;
      }
    },
    []
  );
  return apiCall;
}
