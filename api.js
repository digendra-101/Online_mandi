const API_URL = 'http://127.0.0.1:8000/api/products/';

export const addProduct = async (productData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Product added:', data);
    } catch (error) {
        console.error('Error adding product:', error);
    }
};

// Example usage
// addProduct({
//     name: 'New Product',
//     description: 'Description of the new product',
//     price: 19.99,
// });
