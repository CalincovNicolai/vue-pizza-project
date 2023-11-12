<template>
  <div :class="{'modal-display': isShowing}" class="modal-auth">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="onCancelClick">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text">
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password">
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">Войти</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef } from "vue";

const props = defineProps({
  showAuth: Boolean
});

const isShowing = toRef(props, 'showAuth');
const emit = defineEmits(['cancelClick']);

function onCancelClick() {
  emit('cancelClick');
}
</script>

<style lang="scss" scoped>
</style>
