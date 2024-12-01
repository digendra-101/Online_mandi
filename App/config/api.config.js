// API Configuration
const API_CONFIG = {
    // Base URL using local IP
    BASE_URL: 'http://192.168.164.11:8000',
    
    // Auth endpoints
    AUTH: {
        REGISTER: '/api/auth/register/',
        LOGIN: '/api/auth/login/',
    },
    
    // Default headers
    HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
};

// API service functions
export const apiService = {
    // Registration function
    register: async (userData) => {
        try {
            console.log('Attempting registration:', {
                url: API_CONFIG.BASE_URL + API_CONFIG.AUTH.REGISTER,
                userData: { ...userData, password: '***' }
            });

            const response = await fetch(API_CONFIG.BASE_URL + API_CONFIG.AUTH.REGISTER, {
                method: 'POST',
                headers: API_CONFIG.HEADERS,
                body: JSON.stringify(userData),
            });

            console.log('Registration response status:', response.status);
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
                throw new Error(errorData.error || 'Registration failed');
            }

            const data = await response.json();
            console.log('Registration successful:', data);
            return data;
        } catch (error) {
            console.error('Registration error:', error.message);
            throw new Error(error.message || 'Network request failed');
        }
    },

    // Login function
    login: async (credentials) => {
        try {
            console.log('Attempting login:', {
                url: API_CONFIG.BASE_URL + API_CONFIG.AUTH.LOGIN,
                username: credentials.username
            });

            const response = await fetch(API_CONFIG.BASE_URL + API_CONFIG.AUTH.LOGIN, {
                method: 'POST',
                headers: API_CONFIG.HEADERS,
                body: JSON.stringify(credentials),
            });

            console.log('Login response status:', response.status);

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                throw new Error(errorData.error || 'Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);
            return data;
        } catch (error) {
            console.error('Login error:', error.message);
            throw new Error(error.message || 'Network request failed');
        }
    },
};

export default apiService;
