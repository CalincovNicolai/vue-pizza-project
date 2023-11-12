<template>
  <div class="card">
    <img :src="`../src/assets/${image}`" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ description }}</div>
      </div>
      <div class="card-buttons">
        <button class="button button-primary button-add-cart" @click="selectItem">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ price }} ₽</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuViewModel } from '@types/types.ts';
import { useRestaurantStore } from '@store/restaurant-store.ts';

const props = defineProps<MenuViewModel>();
const restaurantStore = useRestaurantStore();

function selectItem() {
  restaurantStore.setSelectedItemsToCart({ ...props, quantity: 1 });
}
</script>

<style lang="scss" scoped>
</style>
