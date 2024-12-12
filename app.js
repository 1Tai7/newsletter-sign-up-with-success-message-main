let email = "";
const input = document.getElementById("email");
const error = document.getElementById("error");
var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
error.style.color = "#FF5E5B";

const form = document.getElementById("stayUpdatedForm");

document.getElementById("email").addEventListener("change", (event) => {
  email = event.target.value;
});

form.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
  var errorMessage = [];
  console.log(email);
  if (!email || !validEmail.test(email)) {
    input.style.color = "#FF5E5B";
    input.style.background = "#FFE0DF";
    errorMessage.push("Valid email required");
  } else {
    input.style.removeProperty("color");
    input.style.removeProperty("background");
    errorMessage.pop();

    modal.classList.add("modal--show");
  }
  error.innerHTML = errorMessage.join(", ");
});

const openModal = document.querySelector(".subscribe");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#dismiss");

/* openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});*/

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = "";
  modal.classList.remove("modal--show");
});
