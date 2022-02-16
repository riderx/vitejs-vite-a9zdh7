<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import { IonButton } from '@ionic/vue';
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Ionic" />
  <nav>
    <ion-button router-link="/">Home</ion-button>
    <ion-button router-link="/2">second</ion-button>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
