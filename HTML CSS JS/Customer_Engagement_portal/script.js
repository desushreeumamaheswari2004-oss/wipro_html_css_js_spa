const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.textContent = "Registration successful!";
  msg.style.color = "green";
  form.reset();
});