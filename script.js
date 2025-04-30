const audio = document.querySelector('.audio');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');

const songs = [
  {
    title: "Sooraj Dooba Hain",
    artist: "Arijit Singh",
    img: "images/sooraj.png", // replace with actual image
    file:"audio/audio/Agar Tum Saath Ho From Tamasha-128kbps.mp3"
  },
  {
    title: "Ik Vaari Aa",
    artist: "Arijit Singh",
    img: "images/ikvaari.png",
    file:"audio/audio/Ik Vaari Aa From Raabta-128kbps.mp3"
  },
  {
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik & Arijit Singh",
    img: "images/agatumsathho.png",
    file:"audio/audio/Sooraj Dooba Hain-128kbps.mp3"
  }
];


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

