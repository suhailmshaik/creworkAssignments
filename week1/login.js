// declaring variables

let logIn = document.querySelector(".logIn");
let alertBox = document.querySelector(".alert");
let email = document.querySelector("#email");
let emailMsg = document.querySelector(".emailError");
let password = document.querySelector("#password");
let passMsg = document.querySelector(".passError");

// function to verify

let verify = (event) => {
  event.preventDefault();

  // for verifying log In email

  if (
    (email.value.includes("@") && email.value.includes(".com")) ||
    email.value.includes(".in")
  ) {
    emailMsg.classList.remove("show");
    email.style.border = "2px solid green";
  } else {
    emailMsg.classList.add("show");
    email.style.border = "2px solid red";
  }

  // for verifying logIN password

  if (
    password.value.length >= 4 &&
    password.value.length <= 12
    // &&
    // password.value.includes(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  ) {
    passMsg.classList.remove("show");
    password.style.border = "2px solid green";
  } else {
    passMsg.classList.add("show");
    password.style.border = "2px solid red";
  }

  // alert box for successful authentication

  if (
    ((email.value.includes("@") && email.value.includes(".com")) ||
      email.value.includes(".in")) &&
    password.value.length >= 4 &&
    password.value.length <= 12
  ) {
    alertBox.classList.add("show");
    setTimeout(() => {
      alertBox.classList.remove("show");
    }, 3000);
  } else {
    alertBox.classList.remove("show");
  }
};

logIn.addEventListener("click", verify);
