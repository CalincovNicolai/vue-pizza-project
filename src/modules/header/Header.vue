<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="@assets/img/icon/logo.svg" alt="Logo"/>
    </router-link>
    <label class="address">
      <input type="text" class="input input-address" placeholder="Адрес доставки"/>
    </label>
    <div class="buttons">
      <span class="user-name"></span>
      <button class="button button-primary button-auth" @click="openAuthDialog">
        <span class="button-auth-svg"></span>
        <span class="button-text">Войти</span>
      </button>
      <button class="button button-cart" id="cart-button" @click="openCartDialog">
        <span class="button-cart-svg"></span>
        <span class="button-text">Корзина</span>
      </button>
      <button class="button button-primary button-out">
        <span class="button-text">Выйти</span>
        <span class="button-out-svg"></span>
      </button>
    </div>
    <ModalAuth :show-auth="openAuth" @cancelClick="confirmAuthCancel"/>
    <ModalCart :show-cart="openCart" @cancelClick="confirmCartCancel"/>
  </header>
</template>

<script setup lang="ts">
import ModalAuth from '@modules/modal-auth/ModalAuth.vue';
import { ref } from 'vue';
import ModalCart from '@modules/modal-cart/ModalCart.vue';

const openAuth = ref(false);
const openCart = ref(false);

function openAuthDialog() {
  openAuth.value = true;
}

function openCartDialog() {
  openCart.value = true;
}

function confirmAuthCancel() {
  openAuth.value = false;
}

function confirmCartCancel() {
  openCart.value = false;
}
</script>

<style lang="scss" scoped>
</style>
