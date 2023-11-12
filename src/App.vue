<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@modules/header/Header.vue';
import Footer from '@modules/footer/Footer.vue';
</script>

<template>
  <div class="container">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style lang="scss">
@import "@assets/normalize.css";
</style>
