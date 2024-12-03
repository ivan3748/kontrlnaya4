<template>
  <div>
    <Filters
      :categories="categories"
      :price-range="priceRange"
      @filter="handleFilter"
    />
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="product in filteredProducts" :key="product.id" class="product">
        <img :src="product.thumbnail" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p>Цена: {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from './FiltersPage.vue'; // Обновленный импорт
import ProductService from '../services/ProductService'; // Логика сервиса

export default {
  components: { Filters },
  data() {
    return {
      products: [],
      filteredProducts: [],
      categories: [],
      priceRange: [0, 500],
      loading: true,
    };
  },
  async created() {
    try {
      const products = await ProductService.fetchProducts();
      this.products = products;
      this.filteredProducts = products;

      this.categories = [...new Set(products.map(product => product.category))];
      this.priceRange = [
        Math.min(...products.map(product => product.price)),
        Math.max(...products.map(product => product.price)),
      ];
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    handleFilter(filters) {
      this.filteredProducts = ProductService.filterProducts(this.products, filters);
    },
  },
};
</script>

<style>
.product {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
