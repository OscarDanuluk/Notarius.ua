const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1920:{
      slidesPerView: 4,
    },
    1440:{
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
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
  "270deg",
  "360deg",
  "90deg",
  "90deg",
  "360deg",
  "360deg",
  "90deg",
  "90deg",
  "90deg",
  "360deg",
  "90deg",
  "90deg",
];
const stylesForHiddenSlides = [
  "270deg",
  "360deg",
  "90deg",
  "90deg",
  "360deg",
  "360deg",
  "90deg",
  "90deg",
  "90deg",
  "360deg",
  "90deg",
  "90deg",
];
const swiperOverlay = document.querySelector('.swiper-overlay')
const swiperModalSertificate = document.querySelector('.swiper-modal__sertificate')

swiperSlideItem.forEach(function (element, index) {
  element.style.rotate = stylesForSlides[index]
  element.addEventListener('click',function(element){
    swiperOverlay.style.display = 'flex'
    console.log(element.srcElement)

    swiperModalSertificate.style.rotate = stylesForSlides[index]
    swiperOverlay.style.scale = '1'
    swiperModalSertificate.src = element.srcElement.src
  })
})

swiperOverlay.addEventListener('click',function(){
  swiperOverlay.style.scale = '0'
  swiperOverlay.style.display = 'none'
})
document.addEventListener('keydown',function(e){
if(e.key == 'Escape'){
  swiperOverlay.style.scale = '0'
  swiperOverlay.style.display = 'none'  
}
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

// services 
const servicesMore = document.querySelectorAll('.services-cards-item__more')

const servicesText = [
  `Нотаріус засвідчує юридичну чинність договорів, забезпечуючи їхню відповідність законодавству. До основних видів таких договорів належать:
Купівля-продаж нерухомості, транспорту, цінних паперів тощо.
Дарування (наприклад, передача квартири чи автомобіля у дар).
Оренда (довгострокові договори оренди, які потребують нотаріального посвідчення).
Позика (кредитні договори між фізичними особами).
Шлюбні контракти (домовленості між подружжям щодо майна).`,

`Довіреність – це документ, що дозволяє одній особі представляти інтереси іншої. Нотаріус засвідчує її дійсність. Основні види довіреностей:
Загальна (генеральна) – надає широкі повноваження щодо управління майном, бізнесом тощо.
Спеціальна – дозволяє виконувати певний перелік дій (наприклад, розпоряджатися автомобілем).
Разова – для виконання конкретної дії (наприклад, підписати договір купівлі-продажу).`,

`Нотаріус перевіряє особу, що підписує документ, та підтверджує справжність підпису, що необхідно для:
Заяви та заявок (наприклад, для банків, суду, державних органів).
Договорів та угод (якщо вони не підлягають обов’язковому нотаріальному посвідченню).
Згоди батьків на виїзд дитини за кордон.`,

`Нотаріус проводить юридичне оформлення спадкових прав. Основні послуги:
Видача свідоцтва про право на спадщину (за законом або за заповітом).
Складання та посвідчення заповіту.
Відкриття спадкової справи після смерті спадкодавця.
Відмова або прийняття спадщини.`,

`Нотаріус перевіряє відповідність копії оригіналу та засвідчує її справжність. Це необхідно для:
Документів про освіту (дипломи, атестати).
Паспорта, ІПН, свідоцтва про народження.
Довідок, витягів, сертифікатів.
Статутних документів юридичних осіб.`,

`Нотаріус забезпечує правову чистоту угод із нерухомістю, серед яких:
Купівля-продаж квартири чи будинку.
Дарування або міна нерухомості.
Оформлення іпотеки.

Витребування документів з реєстрів.
Дозвіл на продаж частки у спільній власності.`,
]

const servicesOverlay = document.querySelector('.services-overlay')
const servicesModalClose = document.querySelector('.services-modal-close')
const servicesModalDesc = document.querySelector('.services-modal-desc')

servicesMore.forEach(function (element,index) {
  element.addEventListener('click', function () {
    servicesOverlay.style.display = 'flex'
    servicesModalDesc.textContent = servicesText[index]
  })
})

servicesModalClose.addEventListener('click', function () {
  servicesOverlay.style.display = 'none'
  servicesModalDesc.textContent = ''
})

// burger menu
const navOverlayClose = document.querySelector('.nav-overlay-close')
const navOverlay = document.querySelector('.nav-overlay')
const navBurger = document.querySelector('.nav-burger')
navBurger.addEventListener('click',function(){
  navOverlay.classList.toggle('nav-overlay-active')
})

function myLogic() {
  navOverlay.classList.remove('nav-overlay-active')
}

if (window.innerWidth > 768) {
  myLogic();
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    myLogic();
  }
});

// .nav-ovelay-active
