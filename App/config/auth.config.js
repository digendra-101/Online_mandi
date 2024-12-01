// Configuration for authentication endpoints
const AUTH_CONFIG = {
    // Use 10.0.2.2 for Android emulator, localhost for iOS
    BASE_URL: 'http://10.0.2.2:8000/api',
    ENDPOINTS: {
        REGISTER: '/auth/register/',
        LOGIN: '/auth/login/',
    },
    HEADERS: {
        'Content-Type': 'application/json',
    },
};

// Authentication service functions
export const authService = {
    register: async (username, password, email) => {
        try {
            const response = await fetch(`${AUTH_CONFIG.BASE_URL}${AUTH_CONFIG.ENDPOINTS.REGISTER}`, {
                method: 'POST',
                headers: AUTH_CONFIG.HEADERS,
                body: JSON.stringify({
                    username,
                    password,
                    email,
                }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            return data;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    login: async (username, password) => {
        try {
            const response = await fetch(`${AUTH_CONFIG.BASE_URL}${AUTH_CONFIG.ENDPOINTS.LOGIN}`, {
                method: 'POST',
                headers: AUTH_CONFIG.HEADERS,
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    // Helper function to check if a user is already logged in
    checkAuthStatus: async () => {
        try {
            // You might want to check for a stored token or session here
            // For now, we'll return false indicating no stored session
            return false;
        } catch (error) {
            console.error('Auth status check error:', error);
            return false;
        }
    }
};

export default authService;
