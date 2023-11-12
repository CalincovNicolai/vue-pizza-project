<template>
  <router-link :to="`/restaurant/${name.trim().toLowerCase()}`" class="card card-restaurant" @click="selectRestaurant(props)">
    <img :src="`../src/assets/${image}`" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ name }}</h3>
        <span class="card-tag tag">{{ time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ stars }}</div>
        <div class="price">От {{ price }} ₽</div>
        <div class="category">{{ kitchen }}</div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { RestaurantViewModel } from '@types/types.ts';
import { useRestaurantStore } from '@store/restaurant-store.ts';

const props = defineProps<RestaurantViewModel>();
const restaurantStore = useRestaurantStore();

function selectRestaurant(props: RestaurantViewModel) {
  restaurantStore.setSelectedRestaurant(props);
}
</script>

<style lang="scss" scoped>
</style>
