<script setup lang="ts">
import { ref } from 'vue';
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

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div>
    <h1>second</h1>
    <VueTelInput class="px-1 py-2 border-b-2 focus:border-current" />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
