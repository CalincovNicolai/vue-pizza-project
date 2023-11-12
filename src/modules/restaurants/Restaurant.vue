<template>
  <main class="main">
    <div class="container">
      <section class="container-promo">
        <section class="promo pizza">
          <h1 class="promo-title">Онлайн-сервис <br/>доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
          </p>
        </section>
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
                type="text"
                class="input input-search"
                placeholder="Поиск блюд и ресторанов"
                :value="filterText"
                @input="event => searchRestaurant(event)"/>
          </label>
        </div>
        <div class="cards cards-restaurants">
          <RestaurantItem
              v-for="restaurant in restaurants"
              :key="restaurant.name"
              :time_of_delivery="restaurant.time_of_delivery"
              :price="restaurant.price"
              :image="restaurant.image"
              :name="restaurant.name"
              :stars="restaurant.stars"
              :kitchen="restaurant.kitchen"
              :products="restaurant.products"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import RestaurantItem from '@modules/restaurant-item/RestaurantItem.vue';
import { useRestaurantStore } from '@store/restaurant-store.ts';
import { computed, onMounted, ref } from 'vue';

const restaurantStore = useRestaurantStore();
const restaurants = computed(() => restaurantStore.getRestaurants);
let filterText = ref('');

onMounted(() => {
  getRestaurants();
});

function getRestaurants() {
  restaurantStore.init();
}

function searchRestaurant(event: any) {
  filterText.value = event.target.value;
  restaurantStore.searchRestaurant(filterText.value);
}
</script>

<style lang="scss" scoped>
</style>
