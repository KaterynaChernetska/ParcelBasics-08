import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorage from './localStorage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {

    localStorage.save(CURRENT_TIME_KEY, data);  
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(59.112)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('The time was less than 0 or greater than the video’s duration');
        break;

      default:

        break;
    }
  });
