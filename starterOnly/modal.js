function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalX = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalX.forEach((close) => close.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close the modal
function closeModal() {
  modalbg.style.display = "none";
}

//Validate function -
function validate() {
  //Select all inputs
  const i = document.querySelectorAll("input");

  //Check if inputs are valid or not with HTML5 Web API
  //Change attribute "data-error-visible" for show the error message or not
  //Exclude the checkbox2 because is not required for validate form
  i.forEach(function (e) {
    if (e.id != "checkbox2") {
      if (e.validity.valid === false) {
        e.parentElement.setAttribute("data-error-visible", "true");
      } else {
        e.parentElement.setAttribute("data-error-visible", "false");
      }
    }
  });

  /*modalbg.style.display = "block";
  document.querySelector("form").style.display = "none";
  console.log("OKOKOK");*/

  //for keep form on screen when submit
  return false;
}
