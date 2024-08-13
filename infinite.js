// let button = document.querySelector(".btn");
// let body = document.querySelector("body");
// let color = document.querySelector(".color-name");

// button.addEventListener("click", () => {
//   let value1 = randomNumber();
//   let value2 = randomNumber();
//   let value3 = randomNumber();

//   body.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
//   color.innerText = `rgb(${value1}, ${value2}, ${value3})`;
// });

// const randomNumber = () => {
//   let value = Math.floor(Math.random() * 256);

//   return value;
// };


let button = document.querySelector(".btn");
let color = document.querySelector(".color-name");

const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];

button.addEventListener("click", () => {
  let hexColor = "#";

  for (i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()];

    document.body.style.backgroundColor = hexColor;
    color.innerText = hexColor;
  }
});

function getRandomNumber() {
  let num = Math.floor(Math.random() * colors.length);
  
  return num;
}