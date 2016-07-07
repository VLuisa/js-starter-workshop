import './style.scss';
const $ = require('jquery');

let num = 0;
setInterval(function counter() {
  num++;
  $('#main').html(`You've been on this page for ${num} seconds`);
}, 1000);
