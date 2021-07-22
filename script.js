"use strict";

var footerBtn = document.getElementsByClassName("footer__button");
var footerIcon = document.getElementsByClassName("footer__icon");
var mainItemsList = document.getElementsByClassName("main__items__list");
var mainItems = document.getElementsByClassName("main__items");
var footerInput = document.getElementsByClassName("footer__input");
var mainItemsListIcon = document.getElementsByClassName(
  "main__items__list__icon"
);

footerBtn[0].addEventListener("click", createBlock);
footerInput[0].addEventListener("keypress", function (event) {
  console.log("Enter");
  if (event.key === "Enter") {
    createBlock();
  }
});

function createBlock() {
  if (footerInput[0].value === "") {
    console.log("return");
    return;
  }
  console.log("btn click");
  var createdLi = document.createElement("li");
  console.log(createdLi);
  createdLi.setAttribute("class", "main__items__list");
  mainItems[0].appendChild(createdLi);
  var createdSpan = document.createElement("span");
  createdSpan.setAttribute("class", "main__items__list__span");
  var footerInputValue = footerInput[0].value;
  createdSpan.innerText = footerInputValue;
  createdLi.appendChild(createdSpan);
  var createdBtn = document.createElement("button");
  createdBtn.setAttribute("class", "main__items__button");
  createdLi.appendChild(createdBtn);
  createdBtn.addEventListener("click", function () {
    console.log("delete");
    mainItems[0].removeChild(createdLi);
  });
  var createdIcon = document.createElement("i");
  createdIcon.setAttribute("class", "fas fa-trash-alt main__items__list__icon");
  createdBtn.appendChild(createdIcon);
  footerInput[0].value = "";
  footerInput[0].focus();
  createdLi.scrollIntoView();
}
