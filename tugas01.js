// buat sebuah variabel dan menerima 1 param
const cekHariKerja = (day) => {
  // kembalikan sebuah promis yang menerima param resolve dan reject
  return new Promise((resolve, reject) => {
    // gunakan setTimeout, dan set dia ke 3 detik
    setTimeout(() => {
      // buat variabel yang menampung nilai array (hari2 kerja)
      const dateDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      // gunakan method find
      let cek = dateDay.find((item) => {
        // kembalikan, compere item dengan day
        return item === day;
      });
      // lakukan pengecekkan
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari tersebut bukan hari kerja"));
      }
    }, 3000);
  });
};
// buat function untuk mempreses data yang berjalan secara async
async function procesData(day) {
  // gunakan try catch untuk menangani error runtime
  try {
    console.log("Mulai : menggunakan try catch");
    // gunakan keyword await untuk menunggu proses dari fungsi cekHariKerja selesai
    const result = await cekHariKerja(day);
    // cetak hasilnya ke konsol menggunakan console...
    console.log(`${result} adalah hari kerja`);
    // gunakan catch untuk menangkap bila mana terjadi error, masukkan local variabel error
  } catch (error) {
    // cetak error ke console
    console.log(error.message);
  }
}

// jalankan fungsi proses data yang menerima satu bauah nama hari
procesData("sabtu")
  // gunakan then untuk menghandle promise, apabila promise terpenuhhi
  .then(() => {
    console.log("proses selesai");
  })
  // dan gunakan catch untuk menghandle promise apablia promise tidak terpenuhi
  .catch((error) => {
    console.log(error.message);
  });
