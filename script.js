window.addEventListener("click", function () {
  let music = document.getElementById("bgm");
  if (music) music.play();
});

let text = `Halo papi, happy birthday yaa 🤍

Princess cuma mau mulai dengan bilang selamat ulang tahun untuk papi.

Maaf, Princess telat karna kemarin hectic banget. Tapi hari ini Princess pengen kasih papi hadiah dan coba sedikit lebih jujur tentang apa yang Princess rasain.

Terima kasih ya, Pi.

Terima kasih untuk semua hal yang mungkin selama ini nggak selalu Princess lihat atau sadari.

Terima kasih karena udah bekerja keras, terima kasih karena selalu berusaha memberikan yang terbaik, dan terima kasih karena selalu ada untuk Princess.

Mungkin ga semua perjuangan papi pernah diceritain. Mungkin ada banyak capek yang papi simpan sendiri. Tapi Princess harap papi tau kalau semua usaha papi nggak pernah sia-sia.

Princess bangga punya papi seperti papi.

Princess berharap kemarin, hari ini dan seterusnya papi bisa sedikit lebih banyak tersenyum.

Semoga papi selalu sehat, selalu kuat, dan selalu dikelilingi hal-hal baik.

Semoga apa pun yang sedang papi usahakan bisa berjalan dengan lancar.

Semoga hati papi selalu tenang.

Dan semoga papi selalu punya banyak alasan untuk merasa bahagia setiap harinya.

Kalau selama ini Princess pernah bikin papi sedih, kecewa, atau khawatir, Princess minta maaf ya, Pi.

Princess mungkin belum jadi anak yang sempurna, tapi Princess selalu sayang sama papi.

Thank you for everything.

Thank you for every sacrifice.

Thank you for every little thing you've done for me.

Happy birthday, Papi.

Semoga tahun ini membawa lebih banyak kebahagiaan, kesehatan, dan keberkahan untuk papi.

Princess sayang papi, hari ini, besok, dan seterusnya. 🤍`;

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
