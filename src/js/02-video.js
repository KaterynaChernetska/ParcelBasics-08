import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorage from './localStorage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {

    localStorage.save(CURRENT_TIME_KEY, data.seconds);  

};

player.on('timeupdate', throttle(onPlay, 1000));
function getValue () {
    const savedValue = localStorage.load(CURRENT_TIME_KEY);
    if (savedValue === undefined)
    return; 
    else {
        player.setCurrentTime(savedValue)
   }    
}
getValue ();
