<template>
  <nav class="bg-gray-800 p-4 text-white flex justify-between items-center">
    <router-link to="/" class="font-bold text-lg">VueCart</router-link>
    <router-link to="/cart" class="relative">
      🛒 Cart ({{ cart.items.length }})
    </router-link>
  </nav>
</template>

<script setup>
import { useCartStore } from '../store/cart';
const cart = useCartStore();
</script>