const uaBtn = document.querySelector(".ua");
const engBtn = document.querySelector(".eng");

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1440: {
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
  element.addEventListener('click', function (element) {
    swiperOverlay.style.display = 'flex'
    console.log(element.srcElement)

    swiperModalSertificate.style.rotate = stylesForSlides[index]
    swiperOverlay.style.scale = '1'
    swiperModalSertificate.src = element.srcElement.src
  })
})

swiperOverlay.addEventListener('click', function () {
  swiperOverlay.style.scale = '0'
  swiperOverlay.style.display = 'none'
})
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    swiperOverlay.style.scale = '0'
    swiperOverlay.style.display = 'none'
  }
})

// services 
const servicesMore = document.querySelectorAll('.services-cards-item__more')
const servicesTextEn = [
  `A notary certifies the legal validity of contracts, ensuring their compliance with the law. The main types of such contracts include:
Purchase and sale of real estate, vehicles, securities, etc.
Gifts (e.g., transferring an apartment or a car as a gift).
Lease agreements (long-term leases requiring notarization).
Loan agreements (personal credit contracts between individuals).
Prenuptial agreements (spousal arrangements regarding property).`,

  `A power of attorney is a document that allows one person to represent the interests of another. The notary certifies its validity. Main types of powers of attorney:
General – grants broad authority for managing property, business, etc.
Special – allows a specific list of actions (e.g., managing a vehicle).
One-time – for a specific action (e.g., signing a purchase agreement).`,

  `The notary verifies the identity of the person signing the document and confirms the authenticity of the signature, which is required for:
Applications and requests (e.g., for banks, courts, or government bodies).
Contracts and agreements (if they do not require mandatory notarization).
Parental consent for a child's travel abroad.`,

  `The notary handles the legal formalities of inheritance rights. Main services include:
Issuance of a certificate of inheritance (by law or by will).
Drafting and notarizing a will.
Opening an inheritance case after the death of the testator.
Acceptance or refusal of the inheritance.`,

  `The notary verifies the copy’s correspondence to the original and certifies its authenticity. This is required for:
Educational documents (diplomas, certificates).
Passport, taxpayer code, birth certificate.
Certificates, extracts, official confirmations.
Founding documents of legal entities.`,

  `The notary ensures the legal integrity of real estate transactions, including:
Buying and selling apartments or houses.
Donating or exchanging real estate.
Mortgage registration.

Obtaining documents from registers.
Permission to sell a share in joint property.`,
];

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

servicesMore.forEach(function (element, index) {
  element.addEventListener('click', function () {
    servicesOverlay.style.display = 'flex'
    servicesModalDesc.textContent = eng.classList.contains("switcher-active") ? servicesTextEn[index] : servicesText[index];
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
navBurger.addEventListener('click', function () {
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


// languages
const ua = document.querySelector(".ua");
const eng = document.querySelector(".eng");
const lang = {
  ua: {
    navDayTime: 'Пн-Сб 09:00-18:00',
    navWeekend: 'Сб:по викликам Нд:вихідний',
    navEnd: 'Анг',
    navUa: 'Укр',
    headerTitle: 'Олексій Данилюк Орестович',
    headerAdvertising: '(коротка реклама)',
    servicesOneCardTitle: 'Посвідчення договорів',
    servicesOneCardDesc: `Нотаріус засвідчує юридичну чинність договорів, забезпечуючи їхню відповідність законодавству. До основних видів таких договорів належать:
    Купівля-продаж нерухомості, транспорту, цінних паперів тощо.
    Дарування (наприклад, передача квартири чи автомобіля у дар).`,
    servicesTwoCardTitle: 'Посвідчення довіреностей',
    servicesTwoCardDesc: `Довіреність – це документ, що дозволяє одній особі представляти інтереси іншої. Нотаріус засвідчує її дійсність. Основні види довіреностей:
    Загальна (генеральна) – надає широкі повноваження щодо управління майном, бізнесом тощо.`,
    servicesThreeCardTitle: 'Засвідчення справжності підписів',
    servicesThreeCardDesc: `Нотаріус перевіряє особу, що підписує документ, та підтверджує справжність підпису, що необхідно для:
Заяви та заявок (наприклад, для банків, суду, державних органів).
Договорів та угод (якщо вони не підлягають обов’язковому нотаріальному посвідченню).`,
    servicesFourCardTitle: 'Оформлення спадщини',
    servicesFourCardDesc: `Нотаріус проводить юридичне оформлення спадкових прав. Основні послуги:
Видача свідоцтва про право на спадщину (за законом або за заповітом).
Складання та посвідчення заповіту.`,
    servicesFiveCardTitle: 'Нотаріальне засвідчення копій документів',
    servicesFiveCardDesc: `Нотаріус перевіряє відповідність копії оригіналу та засвідчує її справжність. Це необхідно для:
Документів про освіту (дипломи, атестати).
Паспорта, ІПН, свідоцтва про народження.
Довідок, витягів, сертифікатів.
Статутних документів юридичних осіб.`,
    servicesSixCardTitle: 'Нотаріальні дії щодо нерухомості',
    servicesSixCardDesc: `Нотаріус забезпечує правову чистоту угод із нерухомістю, серед яких:
Купівля-продаж квартири чи будинку.
Дарування або міна нерухомості.
Оформлення іпотеки.`,
    aboutMeDesc:'Ласкаво просимо до нотаріальної контори Данилюка Олексія! Ми надаємо широкий спектр нотаріальних послуг відповідно до чинного законодавства України.',
    aboutMeContact:'Контакти',
    locationInfo:'Ви можете знайти мене по адресі яка була вказана вище. Орієнтиром для вас будуть ці фото нижче',
    faqQuestionOne: 'Які документи потрібні для оформлення довіреності?',
    faqQuestionTwo: 'Як оформити спадщину у нотаріуса?',
    faqQuestionThree: 'Чи можна у вас завірити копії документів?',
    faqAnswerOne: 'Для оформлення довіреності необхідно мати паспорт та ідентифікаційний код (для фізичних осіб). У деяких випадках можуть знадобитися додаткові документи, що підтверджують повноваження.',
    faqAnswerTwo: 'Необхідно звернутися до нотаріуса за місцем відкриття спадщини (останнього місця проживання померлого) протягом 6 місяців після смерті спадкодавця. Потрібні: свідоцтво про смерть, документи на майно, паспорт спадкоємця та його ідентифікаційний код.',
    faqAnswerThree: 'Так, ми засвідчуємо копії документів, підтверджуючи їхню відповідність оригіналу.',
    mapHead: 'Контакти',
    mapText:'або пишіть',
    mapAdress:'вулиця Калуська, 13, Бурштин, Івано-Франківська область',
    mapTime:'Графік роботи Пн-Сб с 9:00 до 18:00,',
    mapTimeWeekend: 'Нд: вихідний',
    footerText: '2025 Всі права захищені. Нотаріальні послуги, нотаріус Бурштин',

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
    navDayTime: 'Mon–Sat 09:00–18:00',
  navWeekend: 'Sat: by request Sun: closed',
  navEnd: 'Eng',
  navUa: 'Ua',
  headerTitle: 'Oleksii Danyliuk Orestovych',
  headerAdvertising: '(short advertisement)',
  servicesOneCardTitle: 'Contract Certification',
  servicesOneCardDesc: `A notary certifies the legal validity of contracts, ensuring their compliance with the law. Common types include:
  Purchase and sale of real estate, vehicles, securities, etc.
  Donation (e.g., transferring an apartment or car as a gift).`,
  servicesTwoCardTitle: 'Power of Attorney Certification',
  servicesTwoCardDesc: `A power of attorney is a document that allows one person to represent another. The notary confirms its validity. Main types:
  General (full) power of attorney – grants broad authority over property, business, etc.`,
  servicesThreeCardTitle: 'Signature Authenticity Certification',
  servicesThreeCardDesc: `The notary verifies the identity of the person signing the document and certifies the signature’s authenticity, which is required for:
Applications and statements (e.g., for banks, courts, state authorities).
Contracts and agreements (if they do not require mandatory notarization).`,
  servicesFourCardTitle: 'Inheritance Processing',
  servicesFourCardDesc: `The notary handles the legal processing of inheritance rights. Main services include:
Issuing inheritance certificates (by law or will).
Drafting and certifying wills.`,
  servicesFiveCardTitle: 'Certification of Document Copies',
  servicesFiveCardDesc: `The notary verifies that the copy corresponds to the original and certifies its authenticity. This is needed for:
Education documents (diplomas, certificates).
Passport, taxpayer code, birth certificate.
References, extracts, certificates.
Legal entity founding documents.`,
  servicesSixCardTitle: 'Real Estate Notarial Actions',
  servicesSixCardDesc: `The notary ensures the legal clarity of real estate transactions, including:
Buying and selling apartments or houses.
Donations or exchanges of real estate.
Mortgage registration.`,
  aboutMeDesc: 'Welcome to the notary office of Oleksii Danyliuk! We offer a wide range of notarial services in accordance with the current legislation of Ukraine.',
  aboutMeContact: 'Contacts',
  locationInfo: 'You can find me at the address mentioned above. Use the photos below as landmarks.',
  faqQuestionOne: 'What documents are needed to issue a power of attorney?',
  faqQuestionTwo: 'How to register inheritance with a notary?',
  faqQuestionThree: 'Can you certify document copies?',
  faqAnswerOne: 'To issue a power of attorney, you need a passport and taxpayer ID code (for individuals). In some cases, additional documents confirming authority may be required.',
  faqAnswerTwo: 'You must contact the notary at the place where the inheritance is opened (the last place of residence of the deceased) within 6 months after the death. Required: death certificate, property documents, heir’s passport and tax ID code.',
  faqAnswerThree: 'Yes, we certify copies of documents, confirming their correspondence to the original.',
  mapHead: 'Contacts',
  mapText: 'or write to',
  mapAdress: '13 Kaluska Street, Burshtyn, Ivano-Frankivsk Region',
  mapTime: 'Working hours Mon–Sat from 9:00 to 18:00,',
  mapTimeWeekend: 'Sun: closed',
  footerText: '2025 All rights reserved. Notarial services, notary Burshtyn',
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

function switchLanguage(langType) {
  

  document.querySelectorAll(".place").forEach((el) => {
    el.textContent = lang[langType].navPlace;
  }),
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
  document.querySelectorAll('.unique-nav-title').forEach((el) => {
    el.textContent = lang[langType].navPlace;
  }),

  document.querySelectorAll('.unique-nav-day').forEach((el) => {
    el.textContent = lang[langType].navDayTime;
  }
  ),
  document.querySelector('.ua').textContent = lang[langType].navUa
  document.querySelector('.eng').textContent = lang[langType].navEnd
  document.querySelector('.unique-header-title').textContent = lang[langType].headerTitle
  document.querySelector('.unique-header-Advertising').textContent = lang[langType].headerAdvertising
  document.querySelector('.unique-services-one').textContent = lang[langType].servicesOneCardTitle
  document.querySelector('.unique-services-two').textContent = lang[langType].servicesTwoCardTitle
  document.querySelector('.unique-services-three').textContent = lang[langType].servicesThreeCardTitle
  document.querySelector('.unique-services-four').textContent = lang[langType].servicesFourCardTitle
  document.querySelector('.unique-services-five').textContent = lang[langType].servicesFiveCardTitle
  document.querySelector('.unique-services-six').textContent = lang[langType].servicesSixCardTitle
  document.querySelector('.unique-services-one-desc').textContent = lang[langType].servicesOneCardDesc
  document.querySelector('.unique-services-two-desc').textContent = lang[langType].servicesTwoCardDesc
  document.querySelector('.unique-services-three-desc').textContent = lang[langType].servicesThreeCardDesc
  document.querySelector('.unique-services-four-desc').textContent = lang[langType].servicesFourCardDesc
  document.querySelector('.unique-services-five-desc').textContent = lang[langType].servicesFiveCardDesc
  document.querySelector('.unique-services-six-desc').textContent = lang[langType].servicesSixCardDesc
  document.querySelector('.aboutMe-info-left__desc').textContent = lang[langType].aboutMeDesc
  document.querySelector('.location__desc').textContent = lang[langType].locationInfo
  document.querySelector('.faq-question-one').textContent = lang[langType].faqQuestionOne
  document.querySelector('.faq-question-two').textContent = lang[langType].faqQuestionTwo
  document.querySelector('.faq-question-three').textContent = lang[langType].faqQuestionThree
  document.querySelector('.faq-answer-one').textContent = lang[langType].faqAnswerOne
  document.querySelector('.faq-answer-two').textContent = lang[langType].faqAnswerTwo
  document.querySelector('.faq-answer-three').textContent = lang[langType].faqAnswerThree
  document.querySelector('.map-header').textContent = lang[langType].mapHead
  document.querySelector('.map-hidden-text').textContent = lang[langType].mapText
  document.querySelectorAll('.adressa').forEach((el) => {
    el.textContent = lang[langType].mapAdress;
  }
  ),
  document.querySelector('.map-contacts-calendar__text').textContent = lang[langType].mapTime
  document.querySelector('.footer-police-text').textContent = lang[langType].footerText
  // document.querySelector('.bold-map').textContent = lang[langType].mapTimeWeekend
}
const hiddenModalDesc = document.querySelector('.services-modal-desc')
console.log(hiddenModalDesc)
uaBtn.addEventListener("click", () => {
  switchLanguage("ua")
  engBtn.classList.remove("switcher-active")
  uaBtn.classList.add("switcher-active");
  switchLanguage("ua")
  servicesTextEn
// servicesText
});
engBtn.addEventListener("click", () => {
  switchLanguage("eng");
  uaBtn.classList.remove("switcher-active");
  engBtn.classList.add("switcher-active");
  switchLanguage("eng")
});



  
