window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`) 
    if(!audio) return;

    audio.currentTime =0; // rewind to start of sample
    audio.play();

});