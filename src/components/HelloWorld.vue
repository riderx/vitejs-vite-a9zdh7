<script setup lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1>Hello World</h1>
      <ion-button router-link="/2">second</ion-button>
    </ion-content>
  </ion-page>
</template>

<style scoped></style>
