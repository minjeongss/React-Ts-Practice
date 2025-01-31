import Items from '../src/components/Items.js';

class App {
  constructor() {
    const $app = document.querySelector('#app');
    new Items($app);
  }
}

new App();
