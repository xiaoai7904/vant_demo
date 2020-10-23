import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import vant from 'vant';
import 'vant/lib/index.css';
import '@/style/system.less';

export const appInstance = createApp(App);

export default class SystemLoader {
  constructor() {
    this.initUse();
    this.initMount();
  }
  static of() {
    return new SystemLoader()
  }
  public initUse(): void {
    appInstance
      .use(store)
      .use(router)
      .use(vant);
  }
  public initMount(): void {
    appInstance.mount('#app');
  }
}