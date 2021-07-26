"use strict";

const footerBtn = document.getElementsByClassName("footer__button");
const footerIcon = document.getElementsByClassName("footer__icon");
const mainItemsList = document.getElementsByClassName("main__items__list");
const mainItems = document.getElementsByClassName("main__items");
const footerInput = document.getElementsByClassName("footer__input");
const mainItemsListIcon = document.getElementsByClassName(
  "main__items__list__icon"
);
let localToDos = JSON.parse(localStorage.getItem("toDos"));

let toDoList = [];

if (localToDos) {
  let toDoList = [];
  toDoList = localToDos;
  toDoList.forEach(createBlock);
}

footerBtn[0].addEventListener("click", handleCreateBlock);
footerInput[0].addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleCreateBlock();
  }
});

function handleCreateBlock() {
  if (footerInput[0].value === "") {
    return;
  }
  const inputValueObj = {
    text: footerInput[0].value,
    id: Date.now(),
  };
  createBlock(inputValueObj);
}

function createBlock(inputValue) {
  const createdLi = document.createElement("li");
  createdLi.setAttribute("class", "main__items__list");
  mainItems[0].appendChild(createdLi);
  const createdSpan = document.createElement("span");
  createdSpan.setAttribute("class", "main__items__list__span");
  createdSpan.innerText = inputValue.text;
  createdLi.appendChild(createdSpan);
  const createdBtn = document.createElement("button");
  createdBtn.setAttribute("class", "main__items__button");
  createdLi.appendChild(createdBtn);
  const createdIcon = document.createElement("i");
  createdIcon.dataset.id = inputValue.id;
  createdIcon.setAttribute("class", "fas fa-trash-alt main__items__list__icon");
  createdBtn.appendChild(createdIcon);
  toDoList.push(inputValue);
  footerInput[0].value = "";
  footerInput[0].focus();
  createdLi.scrollIntoView();
  localStorage.setItem("toDos", JSON.stringify(toDoList));
}
mainItems[0].addEventListener("click", removeLi);

function removeLi(event) {
  if (event.target.dataset.id) {
    mainItems[0].removeChild(event.target.parentNode.parentNode);
    const newToDoList = toDoList.filter(function (item) {
      return item.id !== parseInt(event.target.dataset.id);
    });
    localStorage.setItem("toDos", JSON.stringify(newToDoList));
    toDoList = newToDoList;
  }
}
