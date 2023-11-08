import { createRouter, createWebHistory } from 'vue-router';
import Header from '../modules/header/Header.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Header
        }
    ]
});

export default router;
