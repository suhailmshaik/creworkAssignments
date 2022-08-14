// declaring variables
let signUp = document.querySelector(".signUp");
let logIn = document.querySelector(".logIn");

let email = document.querySelector("#email");
let emailMsg = document.querySelector(".emailError");
let password = document.querySelector("#password");
let passMsg = document.querySelector(".passError");

// function to verify

let verify = (event) => {
  event.preventDefault();

  // for verifying sign up and log In email

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

  // for verifying sign up and logIN password

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
};

signUp.addEventListener("click", verify);
logIn.addEventListener("click", verify);
