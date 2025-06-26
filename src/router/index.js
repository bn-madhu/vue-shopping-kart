import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
// import Cart from '../pages/Cart.vue';
// import ProductDetail from '../pages/ProductDetail.vue';

const routes = [
  { path: '/', component: Home },
//   { path: '/cart', component: Cart },
//   { path: '/product/:id', component: ProductDetail },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});