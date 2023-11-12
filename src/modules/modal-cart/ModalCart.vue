<template>
  <div :class="{'modal-display': isShowing}" class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="onCancelClick">&times;</button>
      </div>
      <div class="modal-body">
        <div v-for="item in cartList" :key="item.id" class="food-row">
          <span class="food-name">{{ item.name }}</span>
          <strong class="food-price">{{ item.price }} ₽</strong>
          <div class="food-counter">
            <button class="counter-button" @click="changeQuantity(item.id, 'decrease')">-</button>
            <span class="counter">{{ item.quantity }}</span>
            <button class="counter-button" @click="changeQuantity(item.id, 'increase')">+</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ calculateTotalPrice() }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary" @click="resetCart">Оформить заказ</button>
          <button class="button clear-cart" @click="onCancelClick">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, toRef } from "vue";
import { useRestaurantStore } from '@store/restaurant-store.ts';

const restaurantStore = useRestaurantStore();

onMounted(() => {
  restaurantStore.fetchCartFromLocalStorage();
});

const cartList = computed(() => restaurantStore.getCartList);

const props = defineProps({
  showCart: Boolean
});

const isShowing = toRef(props, 'showCart');
const emit = defineEmits(['cancelClick']);

function onCancelClick() {
  emit('cancelClick');
}

function resetCart() {
  restaurantStore.resetCart();
  onCancelClick();
}

function changeQuantity(id: number, type: string) {
  restaurantStore.updateCartItemQuantity(id, type);
}

function calculateTotalPrice(): number {
  return restaurantStore.calculateCartTotalPrice();
}
</script>

<style lang="scss" scoped>
</style>
