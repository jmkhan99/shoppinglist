"use strict";

const footerBtn = document.getElementsByClassName("footer__button");
const footerIcon = document.getElementsByClassName("footer__icon");
const mainItemsList = document.getElementsByClassName("main__items__list");
const mainItems = document.getElementsByClassName("main__items");
const footerInput = document.getElementsByClassName("footer__input");
const mainItemsListIcon = document.getElementsByClassName(
  "main__items__list__icon"
);

footerBtn[0].addEventListener("click", createBlock);
footerInput[0].addEventListener("keypress", (event) => {
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
  const createdLi = document.createElement("li");
  console.log(createdLi);
  createdLi.setAttribute("class", "main__items__list");
  mainItems[0].appendChild(createdLi);
  const createdSpan = document.createElement("span");
  createdSpan.setAttribute("class", "main__items__list__span");
  let footerInputValue = footerInput[0].value;
  createdSpan.innerText = footerInputValue;
  createdLi.appendChild(createdSpan);
  const createdBtn = document.createElement("button");
  createdBtn.setAttribute("class", "main__items__button");
  createdLi.appendChild(createdBtn);
  createdBtn.addEventListener("click", () => {
    console.log("delete");
    mainItems[0].removeChild(createdLi);
  });
  const createdIcon = document.createElement("i");
  createdIcon.setAttribute("class", "fas fa-trash-alt main__items__list__icon");
  createdBtn.appendChild(createdIcon);
  footerInput[0].value = "";
  footerInput[0].focus();
  createdLi.scrollIntoView();
}
