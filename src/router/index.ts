import { createRouter, createWebHistory } from 'vue-router';
import Restaurant from '@modules/restaurants/Restaurant.vue';
import MenuList from '@modules/menu-list/MenuList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Delivery Food — доставка еды на дом',
      component: Restaurant
    },
    {
      path: '/restaurant/:name',
      name: 'PizzaBurger — доставка еды на дом',
      component: MenuList
    },
  ]
});

export default router;
