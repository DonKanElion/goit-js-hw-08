
import Player from '@vimeo/player';

var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

// ====== Save time =====


player.on('play', data => {
    let currentTime = localStorage.setItem("videoplayer-current-time",`${data.seconds}`);
},);

player.getVideoTitle().then(function(title) {
    // console.log('title:', title);
});

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

  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0 );

