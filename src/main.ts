import { createApp } from 'vue';
import App from './App.vue';
import { IonicVue } from '@ionic/vue';
// You can also comment IonicVue in order to make VueTelInput work
const app = createApp(App);
app.use(IonicVue);
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => {
  return i.install?.({ app });
});
app.mount('#app');
