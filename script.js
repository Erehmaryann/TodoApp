const button = document.querySelector(".inputField button");
const input = document.querySelector(".inputField input");
const ul = document.querySelector("ul");
const tog = document.querySelectorAll("li");
const but = document.querySelectorAll("i");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");

  const icon = document.createElement("i");
  icon.className = "fas fa-trash";
  icon.addEventListener("click", function () {
    li.remove();
  });
  li.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("done");
    }
  });
  const a = document.createTextNode(input.value);
  li.appendChild(a);
  li.appendChild(icon);

  ul.appendChild(li);
  input.value = "";
}
function addListafterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

tog.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("done");
    }
  });
});

function deleteMe(tobedeleted) {
  tobedeleted.parentNode.remove();
}

button.addEventListener("click", function () {
  if (inputLength() > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", addListafterKeypress);
