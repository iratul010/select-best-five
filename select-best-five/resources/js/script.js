const players = document.querySelector(".players");
const btn = document.querySelector(".form-btn");
const playersName = document.querySelector(".players-name");
const calculator = document.querySelector(".clc");
const quantityOne = document.querySelector("#quantity1");
const totalCalc = document.querySelector(".totalClc");
let count = 1;
let ar = [];

const playerInfo = document.querySelector(".player-info");

players.addEventListener("click", function (e) {
  e.preventDefault();

  if (count <= 5) {
    if (e.target.classList.contains("btn")) {
      let name = e.target.closest(".player-info").childNodes[1].textContent;

      const html = `<div class="player-name"><strong>${count}.</strong> ${name}</div>`;
      playersName.insertAdjacentHTML("beforeend", html);
      count += 1;
    }
  } else if (count > 5) {
    art();
  }
});
let art = function () {
  alert("Only 5 Players can select!");
};

let f = +quantityOne.value * 5;
calculator.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".plExpenses").textContent = `$${f}`;
});
totalCalc.addEventListener("click", function (e) {
  e.preventDefault();
});
