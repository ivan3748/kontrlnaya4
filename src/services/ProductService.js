import axios from 'axios';

const API_URL = 'https://dummyjson.com/products?limit=50';

export default {
  async fetchProducts() {
    try {
      const response = await axios.get(API_URL);
      return response.data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  filterProducts(products, filters) {
    return products.filter(product => {
      if (filters.searchTerm && !product.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }
      if (filters.category && product.category !== filters.category) {
        return false;
      }
      if (filters.priceRange && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) {
        return false;
      }
      if (filters.rating && product.rating < filters.rating) {
        return false;
      }
      return true;
    });
  },
};
