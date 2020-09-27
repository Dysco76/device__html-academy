const catalog = document.querySelector(".catalog-nav");
const catalogShow = document.querySelector(".catalog__heading");
const header = document.querySelector(".header");
const slider = document.querySelector(".slider__container");
const slides = document.querySelectorAll(".slider__slide");
const slideButtons = document.querySelectorAll(".slider__nav-button");
const servSlides = document.querySelectorAll(".serv-slider__slide");
const servSlideBtns = document.querySelectorAll(".serv-slider__btn-wrap");
const contactCall = document.getElementById("contact-call");
const contactClose = document.querySelector(".contact-form__close");
const contactForm = document.querySelector(".modal-window");

//Catalg dropdown start
catalogShow.addEventListener("mouseover", function () {
  catalog.classList.add("catalog-nav__visible");
  header.classList.add("header__ontop");
});

catalogShow.addEventListener("mouseout", function () {
  catalog.classList.remove("catalog-nav__visible");
  header.classList.remove("header__ontop");
});

catalog.addEventListener("mouseover", function () {
  catalog.classList.add("catalog-nav__visible");
  header.classList.add("header__ontop");
});

catalog.addEventListener("mouseout", function () {
  catalog.classList.remove("catalog-nav__visible");
  header.classList.remove("header__ontop");
});

//Catalg dropdown end

//Main slider behaviour start
for (i = 0; i < slideButtons.length; i++) {
  const currentButton = slideButtons[i];
  const currentSlide = slides[i];

  currentButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (i = 0; i < slideButtons.length; i++) {
      slideButtons[i].classList.remove("slider__nav-button--active");
      slides[i].classList.remove("slider__slide--active");
    }

    console.log(" ");

    currentButton.classList.add("slider__nav-button--active");
    currentSlide.classList.add("slider__slide--active");
  });
}
//Main slider behaviour end

//Services slider behaviour start
for (i = 0; i < servSlideBtns.length; i++) {
  const currentButton = servSlideBtns[i];
  const currentSlide = servSlides[i];

  currentButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (i = 0; i < servSlideBtns.length; i++) {
      servSlideBtns[i].classList.remove("serv-slider__btn-wrap--active");
      servSlides[i].classList.remove("serv-slider__slide--active");
    }

    console.log(" ");

    currentButton.classList.add("serv-slider__btn-wrap--active");
    currentSlide.classList.add("serv-slider__slide--active");
  });
}
//Services slider behaviour end

//Contact from behaviour start

contactCall.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactForm.classList.add("modal-window--visible");
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactForm.classList.remove("modal-window--visible");
});

//Contact from behaviour end
