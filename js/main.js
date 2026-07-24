const toggler = document.querySelector(".toggler");
const header = document.querySelector(".header__inner");

toggler.addEventListener("click", (e) => {
  header.classList.toggle("header_expand");
});
