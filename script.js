const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const menuLinks = document.querySelector(".wrapperBurgerLink");

function openMenu() {
  closeIcon.style.display = "inline";
  menuIcon.style.display = "none";
  menuLinks.style.display = "flex";
}

function closeMenu() {
  closeIcon.style.display = "none";
  menuIcon.style.display = "inline";
  menuLinks.style.display = "none";
}
