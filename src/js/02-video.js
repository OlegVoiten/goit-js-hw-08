import Player from '@vimeo/player';
import { throttle } from 'lodash';


document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.getElementById('vimeo-player');
  const player = new Player(iframe);

  player.on(
    'timeupdate',
    throttle(function (event) {
      const currentTime = event.seconds;
      localStorage.setItem('videoplayer-current-time', currentTime);
    }, 1000)
  );

  const saveTime = localStorage.getItem('videoplayer-current-time');
  if (saveTime) {
    player.setCurrentTime(saveTime);
  }
});
