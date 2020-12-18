import * as dom from './lib/dom';
import { formatHMS } from './lib/time';

// import dayjs from 'dayjs';
// console.log( dayjs().format('HH:mm:ss') );


// get clock element
const clock = dom.get('.clock');

if (clock) {

  console.log('initializing clock');

  setInterval(() => {

    clock.textContent = formatHMS();

  }, 1000);

}
