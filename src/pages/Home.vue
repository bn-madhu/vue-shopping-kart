<template>
  <div>
    <Navbar />
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="border p-4">
        <h2 class="font-semibold line-clamp-1">{{ product.title }}</h2>
        <p>Price: ${{ product.price }}</p>
        <router-link :to="`/product/${product.id}`" class="text-blue-600 underline block">View</router-link>
        <button class="bg-blue-500 text-white px-2 py-1 mt-2" @click="addToCart(product)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { fetchPhotoProducts } from '../services/products';
import { useCartStore } from '../store/cart';
import Navbar from '../components/Navbar.vue';

const products = ref([]);
const cart = useCartStore();
const addToCart = (product) => cart.addToCart(product);

onMounted(async () => {
  try {
    products.value = await fetchPhotoProducts();
    console.log(products.value);
    
  } catch (err) {
    console.error('Failed to load products');
  }
});
</script>