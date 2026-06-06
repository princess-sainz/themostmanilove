let music;

if (!window.sharedMusic) {
  music = new Audio("music.mp3");
  music.loop = true;
  music.volume = 0.7;
  window.sharedMusic = music;

  music.play().catch(() => {
    console.log("tap dulu untuk play music");
  });
} else {
  music = window.sharedMusic;
}

document.addEventListener("click", function () {
  if (music.paused) {
    music.play();
  }
});
