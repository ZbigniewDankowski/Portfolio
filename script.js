const header = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  header.classList.toggle("navigation--isActive", window.scrollY > 0);
});

const menuBurger = document.querySelector(".navigation__toggle");
const menuList = document.querySelector(".navigation__list");
const menuLinks = [...document.querySelectorAll(".navigation__link")];

const toggleMenu = () => {
  menuList.classList.toggle("navigation__list--active");
};
menuBurger.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
