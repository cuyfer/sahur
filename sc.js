if (window.matchMedia("(min-width: 768px)").matches) {
    window.location.href = "error.html";
}

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('sudahdateng')) {
      let namahp = navigator.userAgent
            function ambilsistem(userAgent) {
          if (userAgent.match(/Android/i)) {
              return "Android";
          } else if (userAgent.match(/iOS/i)) {
              return "iOS";
          } else if (userAgent.match(/Windows Phone/i)) {
              return "Windows Phone";
          } else if (userAgent.match(/Windows/i)) {
              return "Windows";
          } else if (userAgent.match(/Macintosh/i)) {
              return "Macintosh";
          } else if (userAgent.match(/Linux/i)) {
              return "Linux";
          } else {
              return "Woless";
          }
      }
       
       let ambil = ambilsistem(namahp)

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 15000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: `Selamat Datang User ${ambil}`
        });
        localStorage.setItem('sudahdateng', true);
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    // document.getElementById('popup').style.display = 'flex';
          Swal.fire({
            icon: "warning",
            title: "Peringata!!...",
            text: "Heyy Ngapain di teken ? udah lah bro jangan neken lagi ya",
            footer: '<a href="https://wa.me/6283182719413/">Hayyo ngapain neken neken</a>'
          });
});
function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }
window.addEventListener('load', function() {
    function checkOnlineStatus() {
        if (!navigator.onLine) {
          document.getElementById('setting').style.display='none';
          document.addEventListener('contextmenu', function(event) {
               event.preventDefault();
               document.getElementById('popup').style.display = 'flex';
          });
            console.log('Tidak terhubung ke internet');
            document.getElementById('sahurn').textContent = "Tidak ada internet";
            document.getElementById('subuhn').textContent = "Tidak ada internet";
            document.getElementById('imsakn').textContent = "Tidak ada internet";
            document.getElementById('magribn').textContent = "Tidak ada internet";
        }
    }
    checkOnlineStatus();
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);
});
function mati(){
  document.getElementById('musik').pause()
  setTimeout(function(){document.getElementById('matikanlagu').style.display='none'}, 1000)
}
const url = 'https://api.aladhan.com/v1/timingsByCity';
const kota = 'Jakarta'; 
const negara = 'Indonesia'; 
const metod = 5; 
fetch(`${url}?city=${kota}&country=${negara}&method=${metod}`)
    .then(response => response.json())
    .then(data => {
        const jadwalSholat = data.data.timings;
        document.getElementById('sahur').textContent = jadwalSholat.Fajr;
        document.getElementById('subuh').textContent = jadwalSholat.Sunrise;
        document.getElementById('imsak').textContent = jadwalSholat.Imsak;
        document.getElementById('magrib').textContent = jadwalSholat.Maghrib;
        const inputWaktu = document.getElementById('nomor');
        const listWaktu = document.querySelector('.list-waktu ul');
        const sahur = jadwalSholat.Fajr; 
        const subuh = jadwalSholat.Sunrise;
        const imsak = jadwalSholat.Imsak;
        const magrib = jadwalSholat.Maghrib;

        inputWaktu.addEventListener('change', function() {
            const waktuPengguna = inputWaktu.value;
            const jamPengguna = parseInt(waktuPengguna.split(':')[0]);
            const menitPengguna = parseInt(waktuPengguna.split(':')[1]);

            const interval = setInterval(function() {
                const waktuSekarang = new Date();
                const jamSekarang = waktuSekarang.getHours();
                const menitSekarang = waktuSekarang.getMinutes();

                if (jamSekarang === jamPengguna && menitSekarang === menitPengguna) {
                    document.getElementById('musik').play();
                    const tombol = document.getElementById('matikanlagu');
                    tombol.style.display = 'block';
                    clearInterval(interval);
                    const waktuSekarangString = jamSekarang + ':' + menitSekarang;

                    if (waktuSekarangString === sahur || waktuSekarangString === subuh || waktuSekarangString === imsak || waktuSekarangString === magrib) {
                        document.getElementById('musik').play();
                        const tombol = document.getElementById('matikanlagu');
                        tombol.style.display = 'block';
                              
                    }

                    listWaktu.querySelectorAll('li').forEach(function(liElement) {
                        const h1Element = liElement.querySelector('h1');
                        const waktuLabel = h1Element.textContent;
                        const waktuFormat = waktuLabel.split(':').join('.');
                        if (waktuFormat === waktuPengguna.split(':').join('.')) {
                            liElement.remove();
                        }
                    });
                }
            }, 1000);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

    
    

const inputWaktu = document.getElementById('nomor');
const listWaktu = document.querySelector('.list-waktu ul');

inputWaktu.addEventListener('change', function() {
    const waktuPengguna = inputWaktu.value;
    const jamPengguna = parseInt(waktuPengguna.split(':')[0]);
    const menitPengguna = parseInt(waktuPengguna.split(':')[1]);
    
    const interval = setInterval(function() {
        const waktuSekarang = new Date();
        const jamSekarang = waktuSekarang.getHours();
        const menitSekarang = waktuSekarang.getMinutes();

       /* if (jamSekarang === jamPengguna && menitSekarang === menitPengguna) {
            clearInterval(interval);*/
            
            if (jamSekarang === jamPengguna && menitSekarang === menitPengguna) {
             const mus = document.getElementById('musik')
             mus.volume =5.0
             mus.play()
              const tombol = document.getElementById('matikanlagu')
              tombol.style.display='block'
                clearInterval(interval);
             
            
              listWaktu.querySelectorAll('li').forEach(function(liElement) {
                        const h1Element = liElement.querySelector('h1');
                        const waktuLabel = h1Element.textContent;
                        const waktuFormat = waktuLabel.split(':').join('.');
                        if (waktuFormat === waktuPengguna.split(':').join('.')) {
                            liElement.remove();
                        }
                    });
        }
    }, 1000);
});

inputWaktu.addEventListener('change', function() {
  const waktuPengguna = inputWaktu.value;
  const jamPengguna = parseInt(waktuPengguna.split(':')[0]);
  const menitPengguna = parseInt(waktuPengguna.split(':')[1]);

  let waktuAda = false;

  let dataWaktu = localStorage.getItem('dataWaktu');
  if (dataWaktu) {
    dataWaktu = JSON.parse(dataWaktu);
    dataWaktu.forEach(function(waktu) {
      if (waktu === waktuPengguna) {
        waktuAda = true;
      }
    });
  } else {
    dataWaktu = [];
  }

  if (!waktuAda) {
    dataWaktu.push(waktuPengguna);
    localStorage.setItem('dataWaktu', JSON.stringify(dataWaktu));
  }

  listWaktu.querySelectorAll('li').forEach(function(liElement) {
    const h1Element = liElement.querySelector('h1');
    const waktuLabel = h1Element.textContent;
    const waktuFormat = waktuLabel.split(':').join('.');

    if (waktuFormat === waktuPengguna.split(':').join('.')) {
      waktuAda = true;
      liElement.style.backgroundColor = '#90ee9053';
      liElement.style.borderRadius = '30px';
    } else {
      liElement.style.backgroundColor = 'transparent';
    }
  });

  if (!waktuAda) {
    const newLiElement = document.createElement('li');
    const newLabelElement = document.createElement('label');
    const newH1Element = document.createElement('h1');

    newLabelElement.setAttribute('for', 'waktu');
    newLabelElement.textContent = 'Waktu';
    newH1Element.textContent = waktuPengguna;

    newLiElement.appendChild(newLabelElement);
    newLiElement.appendChild(newH1Element);

    listWaktu.appendChild(newLiElement);
  }
});
function jamcuy() {
    let sekarang = new Date();
    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    jam = jam < 10 ? '0' + jam : jam;
    menit = menit < 10 ? '0' + menit : menit;
    detik = detik < 10 ? '0' + detik : detik;

    let waktu = jam + ':' + menit + ':' + detik;
    document.getElementById('jam').textContent = waktu;
}

setInterval(jamcuy, 1000);

const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const hariElement = document.getElementById('hari');
const tanggalElement = document.getElementById('tanggal');
const bulanElement = document.getElementById('bulan');
const tahunElement = document.getElementById('tahun');

const waktuSekarang = new Date();
const hariIni = namaHari[waktuSekarang.getDay()];
const tanggalIni = waktuSekarang.getDate();
const bulanIni = namaBulan[waktuSekarang.getMonth()];
const tahunIni = waktuSekarang.getFullYear();

hariElement.textContent = hariIni;
tanggalElement.textContent = tanggalIni;
bulanElement.textContent = bulanIni;
tahunElement.textContent = tahunIni;


const button = document.getElementById("setting");
let initialX;
let initialY;

button.addEventListener("touchstart", function(event) {
  initialX = event.touches[0].clientX - button.getBoundingClientRect().left;
  initialY = event.touches[0].clientY - button.getBoundingClientRect().top;
});

button.addEventListener("touchmove", function(event) {
  event.preventDefault();
  const newX = event.touches[0].clientX - initialX;
  const newY = event.touches[0].clientY - initialY;
  button.style.left = newX + "px";
  button.style.top = newY + "px";
});


function munculcuy() {
  const kaseting = document.getElementById("kaseting");
  kaseting.style.display = "flex";
  button.style.display='none'
  
}

function tutupSet() {
  const kaseting = document.getElementById("kaseting");
  kaseting.style.display = "none"
  button.style.display='block'
}

const ful = document.getElementById('fulls')
function fulls() {
  if (!document.fullscreenElement) {
    ful.textContent='Default'
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      ful.textContent='Fullscreen'
      document.exitFullscreen();
    }
  }
}

function kuypil() {
  const selek = document.getElementById('pilih').value;
  const body = document.body;

  switch (selek) {
    case 'Roboto':
      body.style.fontFamily = 'Roboto, sans-serif';
      break;
    case 'Montserrat':
      body.style.fontFamily = 'Montserrat, sans-serif';
      break;
    case 'OpenSans':
      body.style.fontFamily = 'Open Sans, sans-serif';
      break;
    case 'Lato':
      body.style.fontFamily = 'Lato, sans-serif';
      break;
    case 'Poppins':
      body.style.fontFamily = 'Poppins, sans-serif';
      break;
    case 'sepesial':
        body.style.fontFamily = "Arizonia, sans-serif";
        break;
    default:
      body.style.fontFamily = 'sans-serif';
  }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });
    });
  }