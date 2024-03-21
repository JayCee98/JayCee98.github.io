document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  // mobileMenu.addEventListener("click", function () {
  //   navList.classList.toggle("show");
  // });

  mobileMenu.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      navList.classList.toggle("show");
    }
  });
  let aboutme = document.getElementById("aboutme");
  let textAbout = aboutme.getAttribute("data-en");
  aboutme.innerText = textAbout;
});

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(buttons);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    console.log(ripples);
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 500);
  });
});

const style = document.getElementById("style");
const root = document.documentElement;

style.addEventListener("click", function () {
  // Obtén el icono actual
  const currentIcon = style.querySelector("i");
  console.log(currentIcon.classList);

  // Cambia el tipo de icono
  if (currentIcon.classList.contains("fa-solid")) {
    currentIcon.classList.remove("fa-solid");
    currentIcon.classList.add("fa-regular");

    // Cambia los valores de las variables para un tema claro
    root.style.setProperty("--color-background", "#68c691");
    root.style.setProperty("--color-letter", "#190000");
    root.style.setProperty("--section-color", "#68c691");
  } else {
    currentIcon.classList.remove("fa-regular");
    currentIcon.classList.add("fa-solid");

    // Cambia los valores de las variables para un tema oscuro
    root.style.setProperty("--color-background", "#1f1f1f");
    root.style.setProperty("--color-letter", "#d09905");
  }
});

function changeLanguage() {
  const actualLanguage = document.documentElement.lang;

  // Cambiar a inglés si el idioma actual es español, y viceversa
  const newLanguage = actualLanguage === "es" ? "en" : "es";

  // Obtener todos los elementos con la clase "traducible"
  const translateelements = document.querySelectorAll(".translate");

  // Iterar sobre los elementos y asignar los nuevos textos según el idioma
  translateelements.forEach((element) => {
    const spanish = element.getAttribute("data-es");
    const english = element.getAttribute("data-en");

    element.textContent = newLanguage === "es" ? spanish : english;
  });

  document.documentElement.lang = newLanguage;
}

let language = document.getElementById("language");

language.addEventListener("click", changeLanguage);
