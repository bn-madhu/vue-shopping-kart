<template>
  <div>
    <Navbar />
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
    <div v-if="cart.items.length === 0">Cart is empty.</div>
    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="border p-4 mb-2">
        <h2 class="font-semibold">{{ item.title }}</h2>
        <p>Quantity: {{ item.qty }}</p>
        <p>Price: ${{ item.price }} || add price in JSON</p>
        <button class="bg-red-500 text-white px-2 py-1" @click="cart.removeFromCart(item.id)">
          Remove
        </button>
      </div>
      <p class="mt-4 font-bold">Total: ${{ cart.totalPrice }} || add totalPrice in JSON</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
import Navbar from '../components/Navbar.vue';
const cart = useCartStore();
</script>