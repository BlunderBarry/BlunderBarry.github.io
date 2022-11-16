const menu = document.getElementById("menu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const body = document.querySelector("body");

openMenu.addEventListener("click", function () {
  menu.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  body.style.overflow = "hidden";
  body.style.background = "hsl(0, 0%, 61%)";
});

closeMenu.addEventListener("click", function () {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  body.style.overflow = "auto";
  body.style.background = "hsl(0, 0%, 100%)";
});
