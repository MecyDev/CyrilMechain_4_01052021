const nav = document.querySelector("#nav");

nav.addEventListener("click", function () {
  if (nav.className === "header__nav") {
    nav.className += " header__nav--mobile";
  } else {
    nav.className = "header__nav";
  }
});

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close-event");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event - with X or button Close
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

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

//Validate function -
function validate() {
  //Variables for select all inputs and form
  const input = document.querySelectorAll("input");
  const form = document.querySelector("form");

  //Check for form validity
  if (form.checkValidity() === false) {
    //Check if inputs are valid or not with HTML5 Web API
    //Change attribute "data-error-visible" for show the error message or not
    //Exclude the checkbox2 because is not required for validate form
    input.forEach(function (e) {
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

    input.forEach(function (e) {
      e.parentElement.setAttribute("data-error-visible", "false");
    });
  }

  //for keep form on screen when submit
  return false;
}
