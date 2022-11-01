const btn = document.getElementById("btn");
const numbers = document.querySelectorAll(".numbers");
const rating = document.getElementById("rating");
const fPage = document.getElementById("fPage");
const sPage = document.getElementById("sPage");

btn.addEventListener("click", function () {
  fPage.style.display = "none";
  sPage.style.display = "flex";
});

numbers[0].addEventListener("click", function () {
  rating.innerHTML = "You selected" + " " + numbersValue() + " " + "out of 5";
});
numbers[1].addEventListener("click", function () {
  rating.innerHTML = "You selected" + " " + numbersValue() + " " + "out of 5";
});

numbers[2].addEventListener("click", function () {
  rating.innerHTML = "You selected" + " " + numbersValue() + " " + "out of 5";
});

numbers[3].addEventListener("click", function () {
  rating.innerHTML = "You selected" + " " + numbersValue() + " " + "out of 5";
});

numbers[4].addEventListener("click", function () {
  rating.innerHTML = "You selected" + " " + numbersValue() + " " + "out of 5";
});

function numbersValue() {
  let value = document.activeElement;
  return value.textContent;
}
