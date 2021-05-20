// DOM Elements
const modalbg = document.querySelector(".modal");
const modalBtn = document.querySelector("#openModal");
const modalClose = document.querySelectorAll(".close-event");
const links = document.querySelectorAll("nav a");
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const inputs = document.querySelectorAll("input");

//Listen windows size for delete mobile menu if open
window.addEventListener(
  "resize",
  function () {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      nav.className = "header__nav";
    }
  },
  false
);

//Open menu on mobile targuet
menu.addEventListener(
  "click",
  function () {
    if (nav.className === "header__nav") {
      nav.className += " header__nav--mobile";
    } else {
      nav.className = "header__nav";
    }
  },
  false
);

//Set menu link to position active
links.forEach(
  (link) =>
    link.addEventListener("click", function () {
      let e = document.querySelector(".header__nav__active");

      if (e !== null) {
        e.classList.remove("header__nav__active");
      }

      link.setAttribute("class", "header__nav__active");
    }),
  false
);

// launch modal event
modalBtn.addEventListener("click", launchModal, false);

// Close modal event - with X or button Close
modalClose.forEach((btn) => btn.addEventListener("click", closeModal, false));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.querySelector("form").style.display = "block";
  document.querySelector(".validate").style.display = "none";
}

//close the modal
function closeModal() {
  modalbg.style.display = "none";
}

//Check form inputs validity when user type in
inputs.forEach(
  (i) =>
    i.addEventListener("input", function () {
      if (i.validity.valid === false) {
        i.parentElement.setAttribute("data-error-visible", "true");
      } else {
        i.parentElement.setAttribute("data-error-visible", "false");
      }
    }),
  false
);

//Validate the form when click on button submit
function validate() {
  //Variables for select all inputs and form
  const form = document.querySelector("form");

  //Check for form validity
  if (form.checkValidity() === false) {
    //Check if inputs are valid or not with HTML5 Web API
    //Change attribute "data-error-visible" for show the error message or not
    //Exclude the checkbox2 because is not required for validate form
    document.querySelector(".error").style.display = "block"; //show genral error message

    inputs.forEach(function (e) {
      if (e.id != "checkbox2") {
        if (e.validity.valid === false) {
          e.parentElement.setAttribute("data-error-visible", "true");
        } else {
          e.parentElement.setAttribute("data-error-visible", "false");
        }
      }
    });
  } else {
    //clear form, clear errors messages and show message validation
    document.querySelector(".validate").style.display = "flex";

    // ********* Here, input code for save form data to destination ********* //

    form.reset();

    inputs.forEach(function (e) {
      e.parentElement.setAttribute("data-error-visible", "false");
      document.querySelector(".error").style.display = "none";
    });
  }

  //for keep form on screen when submit
  return false;
}
