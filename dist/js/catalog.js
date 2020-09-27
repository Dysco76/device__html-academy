const catalog = document.querySelector(".catalog-nav__wrap");
const catalogShow = document.querySelector(".catalog__heading");

//Catalg dropdown start
catalogShow.addEventListener("mouseover", function () {
  catalog.classList.add("catalog-nav__wrap--visible");
  header.classList.add("header__ontop");
});

catalogShow.addEventListener("mouseout", function () {
  catalog.classList.remove("catalog-nav__wrap--visible");
  header.classList.remove("header__ontop");
});

catalog.addEventListener("mouseover", function () {
  catalog.classList.add("catalog-nav__wrap--visible");
  header.classList.add("header__ontop");
});

catalog.addEventListener("mouseout", function () {
  catalog.classList.remove("catalog-nav__wrap--visible");
  header.classList.remove("header__ontop");
});
//Catalg dropdown end
