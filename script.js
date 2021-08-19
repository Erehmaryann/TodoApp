const button = document.querySelector(".inputField button");
const input = document.querySelector(".inputField input");
const ul = document.querySelector("ul");
const tog = document.querySelectorAll("li");
const tog2 = document.querySelectorAll(".check");
const but = document.querySelectorAll("i");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  let inp = document.createElement("input");
  inp.type = "checkbox";
  const icon = document.createElement("i");
  icon.className = "fas fa-trash";
  icon.addEventListener("click", function () {
    li.remove();
  });
  inp.addEventListener("click", function (e) {
    inp.parentElement.classList.toggle("done");
  });

  const a = document.createTextNode(input.value);
  li.appendChild(inp);
  li.appendChild(a);
  li.appendChild(icon);

  ul.appendChild(li);

  const oldItems = JSON.parse(localStorage.getItem("items") || "[]");
  const newItems = [...oldItems, input.value];

  // set items to local storage
  localStorage.setItem("items", JSON.stringify(newItems));

  input.value = "";
}

// Check local storage for items
const allItems = JSON.parse(localStorage.getItem("items") || "[]");
if (allItems) {
  allItems.map((item) => {
    let li = document.createElement("li");
    let inp = document.createElement("input");
    inp.type = "checkbox";
    const icon = document.createElement("i");
    icon.className = "fas fa-trash";
    icon.addEventListener("click", function () {
      li.remove();
    });
    inp.addEventListener("click", function (e) {
      inp.parentElement.classList.toggle("done");
    });
    const a = document.createTextNode(item);
    li.appendChild(inp);
    li.appendChild(a);
    li.appendChild(icon);

    ul.appendChild(li);
  });
}

function addListafterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

tog2.forEach(function (item) {
  item.addEventListener("click", function (e) {
    item.parentElement.classList.toggle("done");
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
