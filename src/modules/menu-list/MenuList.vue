<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-with-sorting">
          <div class="section-heading">
            <h2 class="section-title restaurant-title">{{ selectedRestaurant?.name }}</h2>
            <div class="card-info">
              <div class="rating">{{ selectedRestaurant?.stars }}</div>
              <div class="price">От {{ selectedRestaurant?.price }} ₽</div>
              <div class="category">{{ selectedRestaurant?.kitchen }}</div>
            </div>
          </div>
          <div class="sorting-buttons">
            <button class="button button-primary button-add-cart" @click="sortItemsExpensiveToCheap">Сначала дорогие
            </button>
            <button class="button button-cart" @click="sortItemsCheapToExpensive">Сначала дешевые</button>
          </div>
        </div>
        <div class="cards cards-menu">
          <MenuListItem
              v-for="product in selectedRestaurant?.products"
              :key="product.id"
              :id="product.id"
              :image="product.image"
              :price="product.price"
              :name="product.name"
              :description="product.description"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRestaurantStore } from '@store/restaurant-store.ts';
import MenuListItem from '@modules/menu-list-item/MenuListItem.vue';

const restaurantStore = useRestaurantStore();
const selectedRestaurant = computed(() => restaurantStore.getSelectedRestaurant);

onMounted(() => {
  getSelectedRestaurant();
});

function getSelectedRestaurant() {
  restaurantStore.setSelectedRestaurant();
}

function sortItemsExpensiveToCheap() {
  restaurantStore.sortItemsExpensiveToCheap();
}

function sortItemsCheapToExpensive() {
  restaurantStore.sortItemsCheapToExpensive();
}
</script>

<style lang="scss" scoped>
</style>
