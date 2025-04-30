const audio = document.querySelector('.audio');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');


// event listeners
play.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    play.innerHTML = `<img src="pause.png" alt="Pause" height="20px">`;
  } else {
    audio.pause();
    play.innerHTML = `<img src="play-button-arrowhead.png" alt="Play" height="20px">`;
  }
})

