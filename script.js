const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// script for modal
const button = document.querySelector(".header__consultation");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal-close");
button.addEventListener("click", () => {
  overlay.style.display = "flex";
});

modalClose.addEventListener("click", () => {
  overlay.style.display = "none";
});

// faq list
const faqListItem = document.querySelectorAll(".faq-list-item");

faqListItem.forEach(function (li, index) {
  li.addEventListener("click", function () {
    li.nextElementSibling.classList.toggle("faq-active");
    li.firstElementChild.classList.toggle("rotate");
  });
});
