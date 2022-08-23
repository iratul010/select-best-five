const players = document.querySelector(".players");
const playerTotalCost = document.querySelector(".plExpenses");
const btn = document.querySelector(".form-btn");
const playersName = document.querySelector(".players-name");
const calculator = document.querySelector(".clc");
const quantityOne = document.querySelector("#quantity1");
const quantityTwo = document.querySelector("#quantity2");
const quantityThree = document.querySelector("#quantity3");
const total = document.querySelector("#total");
const totalCalc = document.querySelector(".totalClc");
const playerInfo = document.querySelector(".player-info");
let count = 1;
let arr = [];
const playerCount = document.querySelector(".player-count");
console.log(playerCount);
const process = function () {
  players.addEventListener("click", function (e) {
    e.preventDefault();

    if (count < 6) {
      if (e.target.classList.contains("btn")) {
        let name = e.target.closest(".player-info").childNodes[1].textContent;
        arr.push(name);
        console.log(arr.length);
        console.log(arr);
        const html = `<div class="player-name"><strong clss="player-count":>${arr.length}.</strong> ${name}</div>`;
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

  let playerCost = 0;

  calculator.addEventListener("click", function (e) {
    e.preventDefault();
    --count;
    playerCost = +quantityOne.value * count;

    playerTotalCost.textContent = `$${playerCost}`;
    quantityOne.value = "";
  });

  totalCalc.addEventListener("click", function (e) {
    e.preventDefault();
    let maneger, coatch, amount;
    playerCost = +playerTotalCost.textContent.slice(1);
    maneger = +quantityTwo.value;
    coatch = +quantityThree.value;
    console.log(coatch, maneger);
    amount = playerCost + maneger + coatch;
    console.log(amount);
    total.textContent = `$${amount}`;
    quantityTwo.value = "";
    quantityThree.value = "";
  });
};
process();

function disable(x) {
  if (count - 1 !== 5) {
    x.setAttribute("style", "pointer-events:none;background-color:#b15a0e");
  }
  //for button
  // x.disabled = true;
}
