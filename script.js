const audio = document.querySelector('.audio');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');


// event listeners
play.addEventListener('click',()=>{
if(audio.paused)
{
  audio.play()
}
else
{
  audio.pause()
}
})

