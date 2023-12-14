"use strict";
// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль по кліку на button.change - color
// і задає це значення кольору текстовим вмістом для span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.style.color = document.body.style.backgroundColor;
});
