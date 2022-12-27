const numbers = document.querySelectorAll(".number");
const nodeUserChoice = document.getElementById("userChoice");
const cardOne = document.getElementById("card_one");
const cardTwo = document.getElementById("card_two");

let userChoice;

numbers.forEach((el) => {
  el.addEventListener("click", (e) => onCLickNumber(e));
});

function onCLickNumber(e) {
  numbers.forEach((el) => {
    el.style.backgroundColor = "hsl(210, 19%, 18%)";
  });
  e.target.style.color = "white";
  e.target.style.backgroundColor = "hsl(216, 12%, 54%)";
  userChoice = e.target.innerHTML;
}

const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (userChoice) {
    console.log(userChoice);
    nodeUserChoice.innerHTML = userChoice;
    cardOne.style.display = "none";
    cardTwo.style.display = "grid";
  }
});
