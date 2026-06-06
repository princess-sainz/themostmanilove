window.addEventListener("click", function () {
  let music = document.getElementById("bgm");
  if (music) music.play();
});

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
