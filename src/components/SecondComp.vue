<script setup lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';

// Start server with `npm run dev`
// Visit the second page to make it break
// Check the console and see the Error
// Kill your server
// Comment `VueTelInput` components in js and html
// Clean vite cache in the shell `rm -rf node_modules/.vite/`
// Restart your server
// Visit page second, and no issue.
// Go to ionic module code and comment `IonicVue`
// Go back to second component code and uncomment `VueTelInput`
// Visit the second page, and see the component working without issue
// It happed also with `import VueCal from 'vue-cal'`
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1>Hello World</h1>
      <VueTelInput class="px-1 py-2 border-b-2 focus:border-current" />
      <ion-button router-link="/">Home</ion-button>
    </ion-content>
  </ion-page>
</template>

<style scoped></style>
