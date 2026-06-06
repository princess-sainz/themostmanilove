// 🌟 STAR EFFECT
for (let i = 0; i < 40; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(star);
}

// ⌨️ TYPING TEXT (ucapan page)
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

// 🎁 UNLOCK SURPRISE MESSAGE
function unlock() {
  let msg = "ibun selalu bangga sama kamu 💙 kamu gak sendirian ya, ibun selalu ada buat kamu 🤍";

  let el = document.getElementById("secret");
  el.innerHTML = "";

  let i = 0;

  let typing = setInterval(() => {
    el.innerHTML += msg[i];
    i++;
    if (i >= msg.length) clearInterval(typing);
  }, 40);
      }
