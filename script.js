const audio = document.querySelector('.audio');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');
const title=document.querySelector('.title')

const songs = [
  {
    title: "Agar tum saath ho",
    artist: "Arijit Singh",
    img: "images/sooraj.png", // replace with actual image
    file:"audio/Agar Tum Saath Ho From Tamasha-128kbps.mp3"
  },
  {
    title: "Ik Vaari Aa",
    artist: "Arijit Singh",
    img: "images/ikvaari.png",
    file:"audio/Ik Vaari Aa From Raabta-128kbps.mp3"
  },
  {
    title: "Sooraj dooba hai",
    artist: "Alka Yagnik & Arijit Singh",
    img: "images/agatumsathho.png",
    file:"audio/Sooraj Dooba Hain-128kbps.mp3"
  }
];
function loadsong( song)

{
  title.innerText=song.title;
  audio.src= song.file;
 

}
loadsong(songs[0]);

let currentSongIndex=0;
function loadSongByIndex(currentSongIndex)
{
  
  loadsong(songs[currentSongIndex]);
  audio.play();
  play.innerHTML = `<img src="pause.png" alt="Pause" height="20px">`;

}


// event listeners
play.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    play.innerHTML = `<img src="pause.png" alt="Pause" height="20px">`;
  } else {
    audio.pause();
    play.innerHTML = `<img src="play-button-arrowhead.png" alt="Play" height="20px">`;
  }
});
next.addEventListener('click',()=>{
  currentSongIndex=currentSongIndex+1;
  loadSongByIndex(currentSongIndex);
});
prev.addEventListener('click',()=>{
  currentSongIndex=currentSongIndex-1;
  loadSongByIndex(currentSongIndex);
})

