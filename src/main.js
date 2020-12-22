import * as dom from './lib/dom.js';
import { formatHMS } from './lib/time.js';

// get clock element
const clock = dom.get('.clock');

if (clock) {

  console.log('initializing clock');

  setInterval(() => {

    clock.textContent = formatHMS();

  }, 1000);

}
