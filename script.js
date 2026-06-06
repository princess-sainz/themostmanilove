// 🎵 auto play fix
window.addEventListener("click", function () {
  let music = document.getElementById("bgm");
  if (music) music.play();
});

// 🌠 shooting star
function createStar() {
  let star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (Math.random() * 2 + 2) + "s";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 4000);
}

setInterval(createStar, 300);

// ⌨️ typing text
let text = "selamat ulang tahun ya sayang 💙 semoga kamu selalu bahagia, sehat, dan jadi anak paling kuat dunia 🤍";
let i = 0;

function typeWriter() {
  let el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;
