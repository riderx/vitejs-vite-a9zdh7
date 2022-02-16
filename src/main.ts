import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => {
  return i.install?.({ app });
});
app.mount('#app');
