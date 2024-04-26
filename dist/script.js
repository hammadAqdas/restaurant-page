console.log("yes...");
const lists = document.querySelectorAll(".menu-list__nav ul li");
lists.forEach((list) => {
  list.addEventListener("click", function () {
    const active = document.querySelector(".items-display");
    console.log("active---", active);
    const tabPresent = document.querySelector(".tabs");
    tabPresent.classList.remove("tabs");
    list.classList.add("tabs");
    active.classList.remove("items-display");
    const to_move = document.querySelector(
      `.${list.getAttribute("data-move")}`
    );
    console.log("to--move--", to_move);
    to_move.classList.add("items-display");
    console.log(list.getAttribute("data-move"));
  });
});

// ****************************swiper code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When window width is <= 48rem, display 1 slide
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // When window width is <= 64rem, display 2 slides
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    // Add more breakpoints in rem units as needed
  },
});

///sidebar menu bar ...
const menu = document.querySelector(".menu__bar");
menu.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar__links");
  sidebar.classList.toggle("sidebar-show");
});
const cross = document.querySelector(".cross-menu ");
cross.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar__links");
  sidebar.classList.remove("sidebar-show");
});
//scroll in to view
//const element = document.getElementById("content");
// element.scrollIntoView();
const sidebar_links = document.querySelectorAll(".sidebar__links  ul li");
//links-nav
const sidebar_links2 = document.querySelectorAll(".links-nav li");
console.log(sidebar_links);
sidebar_links.forEach((link) => {
  link.addEventListener("click", function () {
    console.log("clickk");

    const el = link.getAttribute("data-move");
    if (el) {
      console.log("el,,", el);
      const element = document.querySelector(`.${el}`);
      element.scrollIntoView();
      const sidebar = document.querySelector(".sidebar__links");
      sidebar.classList.remove("sidebar-show");
    }
  });
});
sidebar_links2.forEach((link) => {
  link.addEventListener("click", function () {
    console.log("clickk");

    const el = link.getAttribute("data-move");
    if (el) {
      console.log("el,,", el);
      const element = document.querySelector(`.${el}`);
      element.scrollIntoView();
    }
  });
});
