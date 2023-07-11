const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

function showMonths(error, months) {
  if (error) {
    console.error(error);
  } else {
    const result = months.map((month) => {
      return month.toLowerCase();
    });
    console.log(result);
  }
}

getMonth(showMonths);
