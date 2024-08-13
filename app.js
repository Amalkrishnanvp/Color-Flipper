const colors = ["red", "rgb(0, 0, 0)", "green", "yellow", "orange", "#FFC0CB"];

let button = document.querySelector(".btn");
let color = document.querySelector(".color-name");

button.addEventListener("click", () => {
  let randomNum = getRandomNumber();
  let choice = colors[randomNum];

  document.body.style.backgroundColor = choice;
  color.innerText = choice;
});

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * colors.length);

  return randomNum;
}
