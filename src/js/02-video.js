import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// var throttle = require('lodash.throttle');
// import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// ====== Save time =====

// player.on('play', data => {
//     let currentTime = localStorage.setItem(LOCALSTORAGE_KEY,`${data.seconds}`);
// });

// const onPlay = function (data) {
//     const currentTime = localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
//   };

onPlay = data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
player.on('timeupdate', throttle(onPlay, 1000));

// player.getVideoTitle().then(function(title) {
//     // console.log('title:', title);
// });

//============= PLAY  =======

// player
//   .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
//   .then(function (seconds) {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });

  // ===   Якщо коротко ===

  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0 );

