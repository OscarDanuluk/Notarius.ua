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
    li.firstElementChild.firstElementChild.classList.toggle("rotate");
  });
});
// rotate slider diploms
const swiperSlideItem = document.querySelectorAll('.swiper-slide')
const stylesForSlides = [
  "90deg",
  "180deg",
  "180deg",
  "90deg",
  "90deg",
  "180deg",
  "180deg",
  "180deg",
  "180deg",
  "180deg",
  "180deg",
  "0deg",
];
swiperSlideItem.forEach(function (element, index) {
  element.style.rotate = stylesForSlides[index]
})





// languages
const ua = document.querySelector(".ua");
const eng = document.querySelector(".eng");
const lang = {
  ua: {
    navPlace: "Україна Івано-Франківськ",
    home: "Домашня сторінка",
    services: "Послуги",
    about: "Про мене",
    faq: "Питання/Відповіді",
    consultation: "Отримати консультацію",
    consultationTitle: "Замовити консультацію",
    nameLabel: "Ім'я:",
    namePlaceholder: "Введіть своє ім'я",
    phoneLabel: "Телефон:",
    phonePlaceholder: "+38(0__) __-__-___",
    messageLabel: "Повідомлення:",
    submitButton: "Відправити запит",
    servicesTitle: "Послуги",
    readMore: "Детальніше",
    orderService: "Замовити послугу",
    contacts: "Контакти",
    certificates: "Мої сертифікати",
    locationTitle: "Де мене шукати",
    faqTitle: "Питання/Відповіді",
  },
  eng: {
    navPlace: "Ukraine Ivano-Frankivsk",
    home: "Home",
    services: "Services",
    about: "About Me",
    faq: "FAQ",
    consultation: "Get Consultation",
    consultationTitle: "Request a Consultation",
    nameLabel: "Name:",
    namePlaceholder: "Enter your name",
    phoneLabel: "Phone:",
    phonePlaceholder: "+38(0__) __-__-___",
    messageLabel: "Message:",
    submitButton: "Send Request",
    servicesTitle: "Services",
    readMore: "Read more",
    orderService: "Order a service",
    contacts: "Contacts",
    certificates: "My Certificates",
    locationTitle: "Where to Find Me",
    faqTitle: "FAQ",
  },
};

const uaBtn = document.querySelector(".ua");
const engBtn = document.querySelector(".eng");

function switchLanguage(langType) {
  document.querySelector(".place").textContent = lang[langType].navPlace;
  document.querySelector(".nav-link-item-list li:nth-child(1)").textContent =
    lang[langType].home;
  document.querySelector(".nav-link-item-list li:nth-child(2)").textContent =
    lang[langType].services;
  document.querySelector(".nav-link-item-list li:nth-child(3)").textContent =
    lang[langType].about;
  document.querySelector(".nav-link-item-list li:nth-child(4)").textContent =
    lang[langType].faq;
  document.querySelector(".header__consultation").textContent =
    lang[langType].consultation;
  document.querySelector(".form-container h1").textContent =
    lang[langType].consultationTitle;
  document.querySelector("label[for='name']").textContent =
    lang[langType].nameLabel;
  document.getElementById("name").placeholder = lang[langType].namePlaceholder;
  document.querySelector("label[for='number']").textContent =
    lang[langType].phoneLabel;
  document.getElementById("number").placeholder =
    lang[langType].phonePlaceholder;
  document.querySelector("label[for='message']").textContent =
    lang[langType].messageLabel;
  document.querySelector(".submit-button").textContent =
    lang[langType].submitButton;
  document.querySelector(".services__title").textContent =
    lang[langType].servicesTitle;
  document
    .querySelectorAll(".services-cards-item__more")
    .forEach((el) => (el.textContent = lang[langType].readMore));
  document.querySelector(".services__order").textContent =
    lang[langType].orderService;
  document.querySelector(".aboutMe__title").textContent = lang[langType].about;
  document.querySelector(".aboutMe-info-left__contact").textContent =
    lang[langType].contacts;
  document.querySelector(".aboutMe__sertificate").textContent =
    lang[langType].certificates;
  document.querySelector(".location__title").textContent =
    lang[langType].locationTitle;
  document.querySelector(".faq__title").textContent = lang[langType].faqTitle;
}

// Додаємо обробники подій для кнопок перемикання мови
uaBtn.addEventListener("click", () => {
  switchLanguage("ua")
  engBtn.classList.remove("switcher-active")
  uaBtn.classList.add("switcher-active");
  switchLanguage("ua")
});
engBtn.addEventListener("click", () => {
  switchLanguage("eng");
  uaBtn.classList.remove("switcher-active");
  engBtn.classList.add("switcher-active");
  switchLanguage("eng")
});
