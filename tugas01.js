const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dateDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dateDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

async function processData(day) {
  try {
    console.log("Mulai : menggunakan try catch");
    const result = await cekHariKerja(day);
    console.log(`${result} adalah hari kerja`);
  } catch (error) {
    console.log(error.message);
  }
}

processData("senin")
  .then(() => {
    console.log("proses selesai");
  })
  .catch((error) => {
    console.log(error.message);
  });
