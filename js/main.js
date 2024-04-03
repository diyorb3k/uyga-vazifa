let burgerIcon = document.querySelector(".burger-img");
let burgerMenu = document.querySelector(".burgerMenu");

burgerIcon.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("burgerMenushow");
});

/ SMART BACKTOP /; /////
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

// RESPONSIVE NAVBAR //////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
