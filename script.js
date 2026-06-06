window.addEventListener("click", function () {
  let music = document.getElementById("bgm");
  if (music) music.play();
});

let text = `Halo adek, happy birthday ya sayang.

Adek udah makin besar sekarang, dan ibun cuma mau bilang selamat ulang tahun. Semoga hari ini jadi hari yang bagus buat kamu, walaupun mungkin nggak ada yang spesial banget, tapi ibun harap kamu tetap ngerasa disayang.

Maaf ya kalau ibun baru ngucapin sekarang. Ibun telat tau, but ibun tetep pengen bikin sesuatu buat kamu walaupun sederhana.

Ibun bikin ini bukan karena ada alasan apa-apa, cuma pengen aja. Kadang ibun mikir kamu tuh udah sejauh ini, udah banyak berubah, udah makin dewasa juga, dan ibun bangga lihat itu.

Adek jangan ngerasa harus jadi orang yang sempurna ya. Kamu cukup jadi diri kamu sendiri aja. Kalau lagi capek ya istirahat, kalau lagi sedih ya nggak apa-apa juga, itu normal.

Ibun tau kadang hidup nggak selalu enak. Ada hari yang bikin seneng, ada juga hari yang bikin capek. Tapi ibun harap kamu tetap jalan pelan-pelan, nggak perlu buru-buru.

Kalau kamu ngerasa sendiri, ingat ya kamu nggak bener-bener sendiri. Ibun mungkin nggak selalu ada di depan kamu, tapi ibun selalu mikirin kamu.

You’re still my little boy, even if you grow up later. Itu nggak akan berubah.

Kalau ada mimpi kamu, pelan-pelan aja jalanin. Nggak apa-apa kalau belum tercapai sekarang. Semua butuh waktu.

Happy birthday ya, adek.

Ibun sayang kamu, always.🤍`;

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
