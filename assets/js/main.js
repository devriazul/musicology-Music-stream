let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector(".header__menu");
let headerArea = document.querySelector(".header-area");
console.log(headerArea);
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("active");
  if (scrollY > 80) {
    headerArea.classList.add("sticky");
  } else {
    headerArea.classList.remove("sticky");
  }
});

$("#nav").onePageNav();
