const fetchDataUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    const users = data.map((user) => user.name);
    console.log(users);
  })
  .catch((error) => {
    console.log("Terjadi kesalahan", error);
  });
