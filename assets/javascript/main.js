var navList = document.querySelector(".nav-list");
var btnNav = document.querySelector(".btn-menu");
var iconClose = document.querySelector(".bx-menu");

btnNav.addEventListener("click", () => {
  navList.classList.toggle("nav-list-open");
  iconClose.classList.toggle("bx-x");
});

document.querySelectorAll("ul").forEach((n) =>
  n.addEventListener("click", () => {
    navList.classList.remove("nav-list-open");
    iconClose.classList.remove("bx-x");
  })
);
