/* get elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.toggle');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip');
const ranges = player.querySelector('.player__slider');

/* build functions */ 

function togglePlay() {
    console.log('test');
    if(video.paused) {
        video.play();
        toggle.textContent = '►';
    }
    else {
        video.pause();
        toggle.textContent = '❚ ❚';
    }
}

function updateButton() {

}

/* hook up event listeners */ 

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);