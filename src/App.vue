<template>
  <div id="app">
    <header>
      <h1>Фильтрация продуктов</h1>
    </header>
    <main>
      <ProductList />
    </main>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductList,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica', 'Arial', sans-serif;
  background-color: #121212;
  color: #f0f0f0;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #444;
}

header h1 {
  font-size: 2.5rem;
  letter-spacing: 1px;
}

main {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product {
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.product img {
  width: 200px;           
  height: 200px;         
  object-fit: cover;      
  border-bottom: 2px solid #444; 
}

.product:hover {
  transform: translateY(-5px);
}

.product h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #fff;
}

.product p {
  color: #bbb;
  margin: 0 10px 10px 10px;
}

.product p.price {
  color: #f0f0f0;
  font-weight: bold;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

input[type="range"] {
  width: 100%;
  height: 8px;
  background: #bbb;
  border-radius: 5px;
  -webkit-appearance: none;
  appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  background: #333;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #333;
  border-radius: 50%;
  cursor: pointer;
}
</style>
