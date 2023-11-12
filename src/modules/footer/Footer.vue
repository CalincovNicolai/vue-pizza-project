<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <router-link to="/">
          <img src="@assets/img/icon/logo.svg" alt="logo" class="logo footer-logo"/>
        </router-link>
        <nav class="footer-nav">
          <a href="#" class="footer-link">Ресторанам </a>
          <a href="#" class="footer-link">Курьерам</a>
          <a href="#" class="footer-link">Пресс-центр</a>
          <a href="#" class="footer-link">Контакты</a>
        </nav>
        <div class="social-links">
          <a href="#" class="social-link"><img src="@assets/img/social/instagram.svg" alt="instagram"/></a>
          <a href="#" class="social-link"><img src="@assets/img/social/fb.svg" alt="facebook"/></a>
          <a href="#" class="social-link"><img src="@assets/img/social/vk.svg" alt="vk"/></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({})
</script>

<style lang="scss" scoped>
</style>
