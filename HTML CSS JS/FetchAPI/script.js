// Task 1: Fetch and display in console
fetch("https://dummy.restapiexample.com/api/v1/employees")
  .then((response) => response.json())
  .then((data) => {
    console.log("Task 1 - Employee Data:", data);
  })
  .catch((error) => {
    console.error("Task 1 Error:", error);
  });

// Task 2: Fetch and display on page
function getUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      document.getElementById("user").innerHTML = `
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>
        <img src="${user.picture.medium}" alt="User Image">
      `;
    })
    .catch((error) => {
      console.error("Task 2 Error:", error);
    });
}