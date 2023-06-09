import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importez vos composants de page
import Home from './pages/Home.vue';
import Details from './pages/Details.vue';
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:id', component: Details },
  { path: '/notfound', component: NotFound },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


const app = createApp(App);
app.use(router);
app.mount('#app');
