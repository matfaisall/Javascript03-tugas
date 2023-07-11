let inputZodiac = "leo";

const isZodiac = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const zodiac = [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces",
      ];

      if (zodiac.includes(value)) {
        if (value === "aries") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 21 Maret - 19 April`
          );
        } else if (value === "taurus") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 20 April - 20 May`
          );
        } else if (value === "gemini") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 21 May - 20 June`
          );
        } else if (value === "cancer") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 21 June - 22 July`
          );
        } else if (value === "leo") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 23 July - 22 August`
          );
        } else if (value === "virgo") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 23 August - 22 September`
          );
        } else if (value === "libra") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 23 September - 22 October`
          );
        } else if (value === "scorpio") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 23 October - 21 November`
          );
        } else if (value === "sagittarius") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 22 November - 21 December`
          );
        } else if (value === "capricorn") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 22 December - 19 January`
          );
        } else if (value === "aquarius") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 20 Jan - 18 February`
          );
        } else if (value === "pisces") {
          resolve(
            `Zodiac kamu adalah : ${value} dan kamu lahir diantara 19 February - 20 March`
          );
        }
      } else {
        reject(`${value} yang kamu inputkan bukan bagian dari 12 zodiac`);
      }
    }, 2000);
  });
};

isZodiac(inputZodiac)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

const checkZodiac = async () => {
  try {
    const result = await isZodiac(inputZodiac);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

/* 
  PROGRAM 02 : 
*/

const department = [
  "Teknik Informatika",
  "Teknik Mesin",
  "Teknik Elektro",
  "Teknik Nuklir",
  "Teknik Sipil",
  "Ilmu Komputer",
  "Ekonomi Syariah",
];

const doAsyncTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (department == undefined) {
        reject("data gagal");
      } else {
        console.log("data student");
        resolve(department.map((student) => student.toUpperCase()));
      }
    }, 4000);
  });
};

async function handleAsyncTask() {
  try {
    console.log("get Data");
    const data = await doAsyncTask();
    console.log(data);
  } catch (error) {
    console.log("get data failed!");
    console.log(error.message);
  }
}

handleAsyncTask();
