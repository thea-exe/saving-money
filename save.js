const money = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// this event listener will wait until someone clicks the button to perform 
// the function 

btn.addEventListener("click", function () {
  let total = "$"; // this is let instead of const because we will append the dollar amount
  for (let i = 0; i < 2; i++) {
    total += money[getRandomNumber()];
  }

  color.textContent = total; // this function turns the color class in the html file into the new value
});

// Math.floor rounds down, Math.random is a randomizer from 0-.99999
function getRandomNumber() {
  return Math.floor(Math.random() * money.length);
}
