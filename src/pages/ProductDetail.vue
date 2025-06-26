<template>
  <div>
    <Navbar />
    <div v-if="product">
      <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
      <img :src="product.image" alt="product image" class="w-32 h-32 object-contain" />
      <p class="my-2">{{ product.description }}</p>
      <p class="font-semibold">Price: ${{ product.price }}</p>
      <button class="bg-blue-600 text-white px-4 py-2 mt-4" @click="cart.addToCart(product)">Add to Cart</button>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchPhotosById } from '../services/products';
import { useCartStore } from '../store/cart';
import Navbar from '../components/Navbar.vue';

const product = ref(null);
const cart = useCartStore();
const route = useRoute();

onMounted(async () => {
  try {
    product.value = await fetchPhotosById(route.params.id);
  } catch (err) {
    console.error('Error loading product details:', err);
  }
});
</script>