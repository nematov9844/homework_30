let header = document.querySelector(".header");

function baar(){
    let element = document.querySelector(".header__list");
    element.classList.toggle("toggle");
}


window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("header__shrink");
    } else {
      header.classList.remove("header__shrink");
    }
  });