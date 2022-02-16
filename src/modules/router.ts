import { createRouter, createWebHistory } from '@ionic/vue-router';
import { App } from 'vue';
import { Router, RouteRecordRaw } from 'vue-router';
// import { isPlatform } from '@ionic/vue';

interface AppContext<HasRouter extends boolean = true> {
  app: App<Element>;
  router: HasRouter extends true ? Router : undefined;
  routes: HasRouter extends true ? RouteRecordRaw[] : undefined;
}

export type UserModule = (ctx: AppContext) => void;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('../components/HelloWorld.vue'),
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../components/Secondcomp.vue'),
    },
  ],
});
// router.beforeEach(async (to, from, next) => {
//   isPlatform('capacitor')
//   next();
// });

export const install: UserModule = ({ app }) => {
  app.use(router);
};
