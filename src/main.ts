import { createSSRApp } from "vue";
import App from "./App.vue";
import * as pinia from 'pinia';
import 'uno.css';
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia.createPinia());
  return {
    app,
    pinia
  };
}
