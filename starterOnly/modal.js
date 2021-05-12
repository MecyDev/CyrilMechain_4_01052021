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

/*function errorVisible(e) {
  if (e === false) {
    formData[0].setAttribute("data-error-visible", "true");
    console.log(e);
  } else {
    formData[0].setAttribute("data-error-visible", "false");
  }
}*/

/*document.querySelector("#first").addEventListener("submit", function (e) {
  if (document.querySelector("#first").validity.valid === false) {
    formData[0].setAttribute("data-error-visible", "true");
  } else {
    formData[0].setAttribute("data-error-visible", "false");
  }
});*/

/*document.querySelector("#first").addEventListener("invalid", function (e) {
  e.preventDefault();
});*/

function validate() {
  const x = document.querySelectorAll("input");

  x.forEach(function (e) {
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
  return false;
}
