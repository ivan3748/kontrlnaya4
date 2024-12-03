<template>
  <div class="filters">
    <input
      type="text"
      placeholder="Поиск по имени"
      v-model="searchTerm"
      @input="emitFilter"
    />
    <select v-model="category" @change="emitFilter">
      <option value="">Все категории</option>
      <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
    </select>
    <div>
      <label>Цена: {{ priceRange[0] }} - {{ currentPrice }}</label>
      <input
        type="range"
        :min="priceRange[0]"
        :max="priceRange[1]"
        :step="100"
        v-model="currentPrice"
        @input="emitFilter"
      />
    </div>
    <div>
      <label>Рейтинг: {{ rating }}</label>
      <input
        type="range"
        min="0"
        max="5"
        step="0.5"
        v-model="rating"
        @input="emitFilter"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
    priceRange: Array,
  },
  data() {
    return {
      searchTerm: '',
      category: '',
      currentPrice: this.priceRange[1],
      rating: 0,
    };
  },
  methods: {
    emitFilter() {
      this.$emit('filter', {
        searchTerm: this.searchTerm,
        category: this.category,
        priceRange: [this.priceRange[0], this.currentPrice],
        rating: this.rating,
      });
    },
  },
};
</script>

<style>
.filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
