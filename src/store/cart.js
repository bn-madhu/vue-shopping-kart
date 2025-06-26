import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find(item => item.id === product.id);
      if(existing) existing.qty++;
      else this.items.push({...product, qty: 1});
    },
    removeFromCart(id) {
      this.items = this.items.filter(item=>item.id !== id);
    },
    getters: {
      totalPrice: (state)=> state.items.reduce((sum,item)=> sum+item.price*item.qty, 0).toFixed(2),
    }
  }
})