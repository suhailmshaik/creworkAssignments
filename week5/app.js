// variable declarations
let body = document.querySelector("body");
let img = document.querySelector("img");

// function to generate hexcodes
let generateHex = () => {
  let characters = "0123456789ABCDEF";
  let color = "#";

  for (i = 1; i <= 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//EventListener for changing color
img.addEventListener("click", () => {
  body.style.backgroundColor = generateHex();
  img.style.borderColor = generateHex();
});
